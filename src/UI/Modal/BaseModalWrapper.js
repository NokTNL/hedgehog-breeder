import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import modalSlice from "./modalSlice";

import styled from "styled-components/macro";
import GenericBackdrop from "./GenericBackdrop";

const BaseModalCard = styled.section`
  border-radius: 2rem;
  padding: 2rem;
  background-color: white;

  // To enable child elements using absolute positioning
  position: absolute;

  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  font-size: 1.5rem;
`;

// This component is used to wrap anything that needs a base modal. Uses portal to render outside <App>
export default function BaseModalWrapper({ children, onClose }) {
  const dispatch = useDispatch();
  // Tell the whole App when the modal is displayed, and cleanup when dismounted
  useEffect(() => {
    dispatch(modalSlice.actions.showBaseModal(true));
    return function cleanup() {
      dispatch(modalSlice.actions.showBaseModal(false));
    };
  }, []);

  return ReactDOM.createPortal(
    <GenericBackdrop>
      <BaseModalCard>
        {/* CloseBtn executes the passed in callback when clicked */}
        <CloseBtn onClick={onClose}>
          <i className="bi bi-x-circle"></i>
        </CloseBtn>
        {children}
      </BaseModalCard>
    </GenericBackdrop>,
    document.getElementById("modal-root")
  );
}
