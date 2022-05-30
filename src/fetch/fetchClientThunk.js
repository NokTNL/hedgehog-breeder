import modalSlice from "../UI/Modal/modalSlice";

export default function fetchClientThunk({
  loadMsg,
  endpoint,
  method,
  data,
  extraParams,
}) {
  return async (dispatch, getState) => {
    try {
      /**
       * Send registration request ...
       */
      // Display loading modal
      dispatch(modalSlice.actions.loadModalMsg(loadMsg));

      const response = await fetch(
        `https://reqres.in/api/${endpoint}?delay=1&${extraParams.join("&")}`,
        {
          method,
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (!response.ok) {
        console.error(`fetchClientThunk: Bad HTTP status, response data:`);
        console.error(result);
        throw new Error(`fetchClientThunk: Bad HTTP status ${response.status}`);
      }

      return result;
    } finally {
      // !!! Remember to close LoadingModal after finishing the request
      dispatch(modalSlice.actions.loadModalMsg(""));
    }
  };
}
