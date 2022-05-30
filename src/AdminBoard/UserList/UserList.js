import { useContext } from "react";
import UserDataContext from "../UserDataContext";

import styled from "styled-components/macro";
import UserCard from "./UserCard";

const StyledSection = styled.section`
  text-align: center;
`;
const StyledH3 = styled.h3`
  margin-bottom: 0;
`;
const StyledUl = styled.ul`
  padding: 1rem;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
`;

export default function UserList() {
  const [udState] = useContext(UserDataContext);
  const { userData } = udState;
  return (
    <StyledSection>
      <StyledH3>Your hedgehogs 🦔 🦔 🦔 </StyledH3>
      <StyledUl>
        {userData.map((user, index) => (
          <UserCard userIndex={index} key={user.id} />
        ))}
      </StyledUl>
    </StyledSection>
  );
}
