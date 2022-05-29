import UserDataContext from "../UserDataContext";
import { useContext, useState } from "react";

import styled from "styled-components/macro";
import AddUserModal from "./AddUserModal";

const StyledButton = styled.button`
  position: sticky;
  top: 0;

  font-size: 1.5rem;
  padding: 1rem;
  background-color: #ceeafe;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export default function AddUserBtn() {
  const userDataCtx = useContext(UserDataContext);
  const [isAddingUser, setIsAddingUser] = useState(false);

  const handleChooseAdd = () => {
    setIsAddingUser(true);
  };

  return (
    <>
      <StyledButton onClick={handleChooseAdd}>
        <span>Breeed a new hedgehog </span>
        <i className="bi bi-plus-circle"></i>
      </StyledButton>
      {isAddingUser && <AddUserModal setIsAddingUser={setIsAddingUser} />}
    </>
  );
}
