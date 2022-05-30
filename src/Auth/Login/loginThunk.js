import modalSlice from "../../UI/Modal/modalSlice";

export default function loginThunk({ emailInput, passwordInput }) {
  return async (dispatch, getState) => {
    /**
     * Send login request ...
     */

    // TODO: fetch data with this
    // await new Promise(() => {});

    // *** Remember to close LoadingModal after finish loading (or not? Close when the logged in page has loaded)
    dispatch(modalSlice.actions.loadModalMsg(""));

    /**
     * Check if user credentials are correct (usually done on the backend)
     **/
    const breederCredentials = getState().auth.breederCredentials;

    const targetBreeder = breederCredentials.find(
      (breeder) => breeder.email === emailInput
    );

    if (
      targetBreeder === undefined ||
      targetBreeder.password !== passwordInput
    ) {
      throw new Error("loginThunk: Incorrect breeder credentials", {
        cause: "INCORRECT_CREDENTIALS",
      });
    }
    // *** TODO: Go to Login page (with laoding modal)
  };
}
