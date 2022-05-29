import modalSlice from "../../UI/Modal/modalSlice";
import authSlice from "../authSlice";

export default function registerThunk({ newEmail, newPassword }) {
  return async (dispatch, getState) => {
    // Display loading modal
    dispatch(modalSlice.actions.loadModalMsg("Sending your request..."));
    try {
      /**
       * Send registration request ...
       */

      // TODO: fetch data with this
      // await new Promise(() => {});

      /**
       * Check if user already exists (usually performed on the backend)
       **/
      const breederCredentials = getState().auth.breederCredentials;
      if (breederCredentials.some((breeder) => breeder.email === newEmail)) {
        throw new Error(
          `registerThunk: breeder with this e-mail already exists`,
          { cause: "DUPLICATE_EMAIL" }
        );
      }

      /**
       * ... so, fake adding to databse locally
       */
      dispatch(
        authSlice.actions.addBreeder({ email: newEmail, password: newPassword })
      );
    } finally {
      // *** Remember to close LoadingModal after finish loading (or not? Close when the logged in page has loaded)
      dispatch(modalSlice.actions.loadModalMsg(""));
    }
  };
}
