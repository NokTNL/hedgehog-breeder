import { useContext } from "react";
import { AuthContext } from "../Auth";
import styled from "styled-components/macro";
import CredentialCard, * as CC from "../components/CredentialCard/CredentialCard";

const StyledLogin = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function Login() {
  const authCtx = useContext(AuthContext);
  const handleRegister = () => {
    authCtx.setIsRegistering(true);
  };
  return (
    <StyledLogin>
      <CredentialCard>
        <CC.Header>Login to your incubator</CC.Header>
        <CC.Form>
          <CC.FormEntry>
            <CC.FormLabelSpan>Your eeemail:</CC.FormLabelSpan>
            <CC.FormInput />
          </CC.FormEntry>
          <CC.FormEntry>
            <CC.FormLabelSpan>Your seeecret phrase:</CC.FormLabelSpan>
            <CC.FormInput />
          </CC.FormEntry>
        </CC.Form>
        <CC.ButtonsCtn>
          <CC.FormBtn>Logiiiin!</CC.FormBtn>
          <CC.FormBtn onClick={handleRegister}>
            I am neeew to here...
          </CC.FormBtn>
        </CC.ButtonsCtn>
      </CredentialCard>
    </StyledLogin>
  );
}
