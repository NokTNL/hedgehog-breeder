import styled from "styled-components/macro";
import Button from "../../UI/Button";

const StyledNav = styled.nav`
  background-color: #feecf9;
  padding: 1rem;
`;

export default function Nav() {
  return (
    <StyledNav>
      <Button>Logout</Button>
    </StyledNav>
  );
}
