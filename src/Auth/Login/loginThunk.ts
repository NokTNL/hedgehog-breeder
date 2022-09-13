import fetchClientThunk from "../../fetch/fetchClientThunk";
import authSlice from "../authSlice";
import { isErrorWithCause } from "../../utils/typeguards";
import { AppDispatch, RootState } from "../../app/store";
import { CustomThunkAction } from "../../types/types";

type ParamType = {
  emailInput: string;
  passwordInput: string;
};

// Thunks in Redux usually are higher-order functions with this form:
/**
 * (params) =>
 *   (dispatch, getState) => returnType
 */
// TS needs to the type of `params` as well as  `dispatch` and `getState` that it will receive.
// To reduce repetition, you can define your custom thunk type / returned thunk action type in a separate file, see types/types.ts --> CustomThunkAction
// - Alternatively, Redux-thunk provides a type for thunks called ThunkAction, see: https://redux.js.org/usage/usage-with-typescript#type-checking-redux-thunks
export default function loginThunk({
  emailInput,
  passwordInput,
}: ParamType): CustomThunkAction {
  //           ^ Note that it tells TS that the thunk action returns `void` by default. If you need to use the result from the thunk action, you need to explicitly tell the return type, e.g.:
  //            CustomeThunkAction<Promise<string>>
  // v If using this instead, the return type can be INFERRED automatically
  // return async (dispatch: AppDispatch, getState: () => RootState) => {
  return async (dispatch, getState) => {
    try {
      /**
       * Send request ...
       */
      const result = await fetchClientThunk({
        loadMsg: "Logging in...",
        method: "POST",
        endpoint: "login",
        data: {
          // It should send real email here but the API only accepts email existing on their server
          email: "eve.holt@reqres.in",
          password: passwordInput,
        },
      });

      const token = result.token;
      // Type guard
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
          cause: new Error("INCORRECT_CREDENTIALS"),
        });
      }
      // Store a token to signal we have logged in
      dispatch(authSlice.actions.login(token));
    } catch (error) {
      if (
        // Type guard
        isErrorWithCause(error) &&
        error.cause.message === "INCORRECT_CREDENTIALS"
      ) {
        alert("Incorrect breeder credentials!");
      } else {
        alert("There's something wrong with loggin in...please try again.");
      }
      throw error;
    }
  };
}
