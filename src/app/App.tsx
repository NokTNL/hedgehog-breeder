import { useSelector } from "react-redux";

import styled, { css } from "styled-components/macro";
import AdminBoard from "../AdminBoard/AdminBoard";
import Auth from "../Auth/Auth";
import LoadingModal from "../UI/Modal/LoadingModal";
import { RootState } from "./store";

type StyledAppProps = {
  isBaseModalOpen: boolean
}

const StyledApp = styled.div<StyledAppProps>`
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
  const isBaseModalOpen = useSelector((state: RootState) => state.modal.isBaseModalOpen);
  const loadingModalMsg = useSelector((state: RootState) => state.modal.loadingModalMsg);
  const loginToken = useSelector((state: RootState) => state.auth.loginToken);
  return (
    <StyledApp isBaseModalOpen={isBaseModalOpen}>
      {/* If Login token does not exist, ask for credentials, otherwise get the Admin Board page */}
      {loginToken === "" ? <Auth /> : <AdminBoard />}
      {loadingModalMsg !== "" && <LoadingModal message={loadingModalMsg} />}
    </StyledApp>
  );
}

export default App;
