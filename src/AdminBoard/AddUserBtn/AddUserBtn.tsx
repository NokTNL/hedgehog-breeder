import { useState } from "react";

import styled from "styled-components/macro";
import AddUserModal from "./AddUserModal";

const StyledButton = styled.button`
  position: sticky;
  top: 0;
  z-index: 1;

  font-size: 1.5rem;
  padding: 1rem;
  background-color: #ceeafe;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &:hover {
    transition: transform 0.4s;
    transform: scale(1.02);
  }

  &:active {
    transition: none;
    transform: scale(0.99);
  }

  @media (max-width: 40rem) {
    font-size: 1.2rem;
    padding: 0.7rem;
  }
`;

export default function AddUserBtn() {
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
