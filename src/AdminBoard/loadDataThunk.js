import fetchClientThunk from "../fetch/fetchClientThunk";

export default function loadDataThunk() {
  return async (dispatch, getState) => {
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

      return results;
    } catch (error) {
      alert(
        "Something wrong has happened when loading your hedgehogs ...please login again."
      );
      throw error;
    }
  };
}
