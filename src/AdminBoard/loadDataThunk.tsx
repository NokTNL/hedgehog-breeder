import fetchClientThunk from "../fetch/fetchClientThunk";
import store from "../app/store";
import { UserData } from "./UserDataContext";

const { dispatch, getState } = store;

export default async function loadDataThunk(): Promise<UserData[]> {
  try {
    /**
     * Check if a token is available
     */
    const token = getState().auth.loginToken;
    if (token === "") {
      throw new Error(`loadDataThunk: no token available, access denied`);
    }
    /**
     * Send request ...
     */
    const results = await dispatch(
      fetchClientThunk({
        loadMsg: "Loading you hedgehogs...",
        method: "GET",
        endpoint: "users",
        extraParams: ["page=2"],
      })
    );

    return results.data;
  } catch (error) {
    alert(
      "Something wrong has happened when loading your hedgehogs ...please login again."
    );
    throw error;
  }
}
