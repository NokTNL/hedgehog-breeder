import ReactDOM from "react-dom";
import styled from "styled-components/macro";
import GenericBackdrop from "./GenericBackdrop";

const Message = styled.div`
  margin: 3rem;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  isolation: isolate;
`;

// This is needed when somthing is loading etc. Goes above <ModalWrapper> which is rendered in "modal-root"
export default function LoadingModal({ message }) {
  return ReactDOM.createPortal(
    <GenericBackdrop>
      <Message>{message}</Message>
    </GenericBackdrop>,
    document.getElementById("loading-modal-root")
  );
}
