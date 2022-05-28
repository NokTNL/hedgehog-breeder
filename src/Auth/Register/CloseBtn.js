import { AuthContext } from "../Auth";
import { useContext } from "react";

import styled from "styled-components/macro";

const StyledBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  font-size: 1.5rem;
`;

export default function CloseBtn() {
  const authCtx = useContext(AuthContext);

  const handleClose = () => {
    authCtx.setIsRegistering(false);
  };
  return (
    <StyledBtn onClick={handleClose}>
      <i className="bi bi-x-circle"></i>
    </StyledBtn>
  );
}
