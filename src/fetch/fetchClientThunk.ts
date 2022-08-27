import modalSlice from "../UI/Modal/modalSlice";
import store from "../app/store";

const { dispatch } = store;

type ParamType = {
  loadMsg: string;
  endpoint?: string;
  method?: "GET" | "POST" | "DELETE";
  data?: any;
  extraParams?: string[];
  parseJson?: boolean;
};

export default async function fetchClientThunk({
  loadMsg,
  endpoint = "",
  method = "GET",
  data = {},
  extraParams = [],
  parseJson = true,
}: ParamType) {
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
    const result = parseJson ? await response.json() : null;
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
}
