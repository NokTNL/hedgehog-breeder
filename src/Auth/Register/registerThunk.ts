import fetchClientThunk from "../../fetch/fetchClientThunk";
import authSlice from "../authSlice";
import modalSlice from "../../UI/Modal/modalSlice";
import store from "../../app/store";
import { isErrorWithCause } from "../../utils/typeguards";

const { dispatch, getState } = store;

type ParamType = {
  newEmail: string;
  newPassword: string;
};

export default function registerThunk({ newEmail, newPassword }: ParamType) {
  return async () => {
    try {
      /**
       * Send registration request ...
       */
      const token = await fetchClientThunk({
        loadMsg: "Sending your request...",
        method: "POST",
        endpoint: "register",
        data: {
          // It should send real email here but the API only accepts email existing on their server
          email: "eve.holt@reqres.in",
          password: newPassword,
        },
      });
      /**
       * Check if user already exists (usually performed on the backend) ...
       **/
      const breederCredentials = getState().auth.breederCredentials;
      if (breederCredentials.some((breeder) => breeder.email === newEmail)) {
        throw new Error(
          `registerThunk: breeder with this e-mail already exists`,
          { cause: Error("DUPLICATE_EMAIL") }
        );
      }
      /**
       * ... and fake adding to database locally
       */
      dispatch(
        authSlice.actions.addBreeder({ email: newEmail, password: newPassword })
      );

      /**
       * Show "successful" animation
       */
      dispatch(modalSlice.actions.loadModalMsg("✅"));
      await new Promise((resolve) => {
        setTimeout(() => {
          dispatch(modalSlice.actions.loadModalMsg(""));
          resolve(null);
        }, 1000);
      });
    } catch (error) {
      if (
        isErrorWithCause(error) &&
        error.cause.message === "DUPLICATE_EMAIL"
      ) {
        alert(
          "There's already another breeder using this e-mail...please try another one."
        );
      } else {
        alert(
          "There's something wrong with the registration...please try again."
        );
      }
      throw error;
    }
  };
}
