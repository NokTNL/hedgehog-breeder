import fetchClientThunk from "../../fetch/fetchClientThunk";
import authSlice from "../authSlice";

export default function loginThunk({ emailInput, passwordInput }) {
  return async (dispatch, getState) => {
    try {
      /**
       * Send registration request ...
       */
      const result = await dispatch(
        fetchClientThunk({
          loadMsg: "Logging in...",
          method: "POST",
          endpoint: "login",
          data: {
            // It should send real email here but the API only accepts email existing on their server
            email: "eve.holt@reqres.in",
            password: passwordInput,
          },
        })
      );
      const token = result?.token;
      if (typeof token !== "string") {
        throw new Error(
          `loginThunk: invalid token ${token} of type ${typeof token}`
        );
      }
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
      // Store a token to signal we have logged in
      dispatch(authSlice.actions.login(token));
    } catch (error) {
      if (error.cause === "INCORRECT_CREDENTIALS") {
        alert("Incorrect breeder credentials!");
      } else {
        alert("There's something wrong with loggin in...please try again.");
      }
      throw error;
    }
  };
}
