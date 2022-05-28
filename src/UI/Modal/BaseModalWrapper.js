import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import modalSlice from "./modalSlice";
import GenericBackdrop from "./GenericBackdrop";

// This component is used to wrap anything that needs a base modal. Uses portal to render outside <App>
export default function BaseModalWrapper({ children }) {
  const dispatch = useDispatch();
  // Tell the whole App when the modal is displayed, and cleanup when dismounted
  useEffect(() => {
    dispatch(modalSlice.actions.showBaseModal(true));
    return function cleanup() {
      dispatch(modalSlice.actions.showBaseModal(false));
    };
  }, []);
  return ReactDOM.createPortal(
    <GenericBackdrop>{children}</GenericBackdrop>,
    document.getElementById("modal-root")
  );
}
