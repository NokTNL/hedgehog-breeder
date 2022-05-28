import styled from "styled-components/macro";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import modalSlice from "../../UI/Modal/modalSlice";

const StyledBackdrop = styled.div`
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  inset: 0;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

// This component is shipped outside <App> using portal for simplicity
export default function ModalBackdrop({ children }) {
  const dispatch = useDispatch();
  // Tell the whole App when the modal is displayed, and cleanup when dismounted
  useEffect(() => {
    dispatch(modalSlice.actions.setModal(true));
    return function cleanup() {
      dispatch(modalSlice.actions.setModal(false));
    };
  }, []);
  return ReactDOM.createPortal(
    <StyledBackdrop>{children}</StyledBackdrop>,
    document.getElementById("modal-root")
  );
}
