import fetchClientThunk from "../../fetch/fetchClientThunk";
import authSlice from "../authSlice";

export default function registerThunk({ newEmail, newPassword }) {
  return async (dispatch, getState) => {
    try {
      /**
       * Send registration request ...
       */

      await dispatch(
        fetchClientThunk({
          loadMsg: "Sending your request...",
          method: "POST",
          endpoint: "register",
          data: {
            // It should send real email here but the API only accepts email existing on their server
            email: "eve.holt@reqres.in",
            password: newPassword,
          },
        })
      );

      /**
       * Check if user already exists (usually performed on the backend) ...
       **/
      const breederCredentials = getState().auth.breederCredentials;
      if (breederCredentials.some((breeder) => breeder.email === newEmail)) {
        throw new Error(
          `registerThunk: breeder with this e-mail already exists`,
          { cause: "DUPLICATE_EMAIL" }
        );
      }
      /**
       * ... and fake adding to database locally
       */
      dispatch(
        authSlice.actions.addBreeder({ email: newEmail, password: newPassword })
      );
      alert("Registration successful!");
    } catch (error) {
      if (error.cause === "DUPLICATE_EMAIL") {
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
