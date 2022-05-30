import { useDispatch } from "react-redux";
import authSlice from "../../Auth/authSlice";

import styled from "styled-components/macro";
import Button from "../../UI/Button";

const StyledNav = styled.nav`
  background-color: #feecf9;
  padding: 1rem;
`;

const LogoutButton = styled(Button)`
  padding: 0.5rem 3rem;
  font-size: 1rem;
`;

export default function Nav() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authSlice.actions.login(""));
  };
  return (
    <StyledNav>
      <LogoutButton onClick={handleLogOut}>Logout</LogoutButton>
    </StyledNav>
  );
}
