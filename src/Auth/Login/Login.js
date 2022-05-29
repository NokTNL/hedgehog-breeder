import { useContext } from "react";
import { AuthContext } from "../Auth";
import styled from "styled-components/macro";
import Card, * as CardItems from "../../UI/Card/Card";

const StyledLogin = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledCard = styled(Card)`
  border: 0.1rem solid gray;
`;

export default function Login() {
  const authCtx = useContext(AuthContext);
  const handleRegister = () => {
    authCtx.setIsRegistering(true);
  };
  return (
    <StyledLogin>
      <StyledCard>
        <CardItems.Header>Login to your incubator</CardItems.Header>
        <CardItems.Form>
          <CardItems.FormEntry>
            <CardItems.FormLabelSpan>Your eeemail:</CardItems.FormLabelSpan>
            <CardItems.FormInput />
          </CardItems.FormEntry>
          <CardItems.FormEntry>
            <CardItems.FormLabelSpan>
              Your seeecret phrase:
            </CardItems.FormLabelSpan>
            <CardItems.FormInput />
          </CardItems.FormEntry>
        </CardItems.Form>
        <CardItems.ButtonsCtn>
          <CardItems.FormBtn>Logiiiin!</CardItems.FormBtn>
          <CardItems.FormBtn onClick={handleRegister}>
            I am neeew to here...
          </CardItems.FormBtn>
        </CardItems.ButtonsCtn>
      </StyledCard>
    </StyledLogin>
  );
}
