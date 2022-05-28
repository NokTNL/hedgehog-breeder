import styled from "styled-components/macro";
import Auth from "../Auth/Auth";

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <StyledApp>
      <Auth />
    </StyledApp>
  );
}

export default App;
