import modalSlice from "../../UI/Modal/modalSlice";

export default function registerThunk() {
  return async (dispatch) => {
    dispatch(modalSlice.actions.loadModalMsg("Sending your request..."));
    // TODO: fetch data with this
    await new Promise(() => {});
    // *** Remember to close LoadingModal after finish loading (or not? Close when the logged in page has loaded)
    dispatch(modalSlice.actions.loadModalMsg(""));
  };
}
