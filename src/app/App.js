import { useSelector } from "react-redux";
import styled, { css } from "styled-components/macro";
import Auth from "../Auth/Auth";

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;

  ${(props) =>
    props.isModalOpen &&
    css`
      filter: blur(2px);
    `}
`;

function App() {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  return (
    <>
      <StyledApp isModalOpen={isModalOpen}>
        <Auth />
      </StyledApp>
    </>
  );
}

export default App;
