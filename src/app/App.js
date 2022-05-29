import { useSelector } from "react-redux";
import styled, { css } from "styled-components/macro";
import AdminBoard from "../AdminBoard/AdminBoard";
import Auth from "../Auth/Auth";
import LoadingModal from "../UI/Modal/LoadingModal";

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;

  // Blur <App> when a base modal (those wrapped with <BaseModalWrapper>) is open
  ${(props) =>
    props.isBaseModalOpen &&
    css`
      filter: blur(2px);
    `}
`;

function App() {
  const isBaseModalOpen = useSelector((state) => state.modal.isBaseModalOpen);
  const loadingModalMsg = useSelector((state) => state.modal.loadingModalMsg);
  return (
    <StyledApp isBaseModalOpen={isBaseModalOpen}>
      {/* <Auth /> */}
      <AdminBoard />
      {loadingModalMsg !== "" && <LoadingModal message="Loading..." />}
    </StyledApp>
  );
}

export default App;
