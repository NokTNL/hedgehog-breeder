import { useContext } from "react";
import { useDispatch } from "react-redux";
import registerThunk from "./registerThunk";
import { AuthContext } from "../Auth";

import BaseModalWrapper from "../../UI/Modal/BaseModalWrapper";
import CredentialCard, * as CC from "../components/CredentialCard/CredentialCard";
import CloseBtn from "./CloseBtn";

export default function Register() {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const handleRegister = async () => {
    // *** TODO: pass Info into the thunk
    await dispatch(registerThunk());
    // Close itself
    authCtx.setIsRegistering(false);
  };
  return (
    <BaseModalWrapper>
      <CredentialCard>
        <CloseBtn />
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
    </BaseModalWrapper>
  );
}
