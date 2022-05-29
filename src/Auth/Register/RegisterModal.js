import { useContext } from "react";
import { useDispatch } from "react-redux";
import registerThunk from "./registerThunk";
import { AuthContext } from "../Auth";

import BaseModalWrapper from "../../UI/Modal/BaseModalWrapper";
import * as Card from "../../UI/Card/Card";

export default function RegisterModal() {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();

  const handleRegister = async () => {
    // *** TODO: pass Info into the thunk
    await dispatch(registerThunk());
    // Close itself
    authCtx.setIsRegistering(false);
  };
  const handleClose = () => {
    authCtx.setIsRegistering(false);
  };

  return (
    <BaseModalWrapper onClose={handleClose}>
      <Card.Header>Register yourself!</Card.Header>
      <Card.Form>
        <Card.FormEntry>
          <Card.FormLabelSpan>Your eeemail:</Card.FormLabelSpan>
          <Card.FormInput />
        </Card.FormEntry>
        <Card.FormEntry>
          <Card.FormLabelSpan>Your seeecret phrase:</Card.FormLabelSpan>
          <Card.FormInput />
        </Card.FormEntry>
      </Card.Form>
      <Card.ButtonsCtn>
        <Card.FormBtn onClick={handleRegister}>Let's gooo!</Card.FormBtn>
      </Card.ButtonsCtn>
    </BaseModalWrapper>
  );
}
