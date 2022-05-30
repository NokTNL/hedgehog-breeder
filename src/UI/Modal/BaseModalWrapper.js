import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import modalSlice from "./modalSlice";

import styled from "styled-components/macro";
import GenericBackdrop from "./GenericBackdrop";
import Card from "../Card/Card";

const BaseModalCard = styled(Card)`
  // To enable child elements using absolute positioning
  position: absolute;
  margin: 1rem;

  animation: base-modal-slidein 0.5s;

  @keyframes base-modal-slidein {
    from {
      transform: scale(0.5);
      opacity: 0;
    }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  font-size: 1.5rem;

  &:hover {
    transform: translate(0.05rem, -0.05rem);
  }
  &:active {
    transform: translate(-0.05rem, 0.05rem);
  }
`;

const CloseTxt = styled.span`
  display: none;
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
          {/* Accesibility */}
          <CloseTxt>Close message</CloseTxt>
          <i className="bi bi-x-circle"></i>
        </CloseBtn>
        {children}
      </BaseModalCard>
    </GenericBackdrop>,
    document.getElementById("modal-root")
  );
}
