import { useContext } from "react";
import { AuthContext } from "../Auth";
import styled from "styled-components/macro";
import ModalBackdrop from "../../UI/Modal/ModalBackdrop";
import CredentialCard, * as CC from "../components/CredentialCard/CredentialCard";

const StyledRegister = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Register() {
  const authCtx = useContext(AuthContext);
  const handleRegister = () => {
    // *** TODO: Add fetching logic
    // Close itself
    authCtx.setIsRegistering(false);
  };
  return (
    <ModalBackdrop>
      <StyledRegister>
        <CredentialCard>
          <CC.Header>Register yourself!</CC.Header>
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
            <CC.FormBtn onClick={handleRegister}>Let's gooo!</CC.FormBtn>
          </CC.ButtonsCtn>
        </CredentialCard>
      </StyledRegister>
    </ModalBackdrop>
  );
}
