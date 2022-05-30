import { useDispatch, batch } from "react-redux";
import authSlice from "../../Auth/authSlice";
import modalSlice from "../../UI/Modal/modalSlice";

import styled from "styled-components/macro";
import Button from "../../UI/Button";

const StyledNav = styled.nav`
  background-color: #feecf9;
  padding: 1rem;

  @media (max-width: 40rem) {
    padding: 0.7rem;
  }
`;

const LogoutButton = styled(Button)`
  padding: 0.5rem 3rem;
  font-size: 1rem;
`;

export default function Nav() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    /**
     * Show logging out modal message before logout
     */
    dispatch(modalSlice.actions.loadModalMsg("Logging out..."));
    setTimeout(() => {
      batch(() => {
        dispatch(modalSlice.actions.loadModalMsg(""));
        dispatch(authSlice.actions.login(""));
      });
    }, 1000);
  };
  return (
    <StyledNav>
      <LogoutButton onClick={handleLogOut}>Logout</LogoutButton>
    </StyledNav>
  );
}
