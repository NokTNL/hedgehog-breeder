import { SyntheticEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import registerThunk from "./registerThunk";

import BaseModalWrapper from "../../UI/Modal/BaseModalWrapper";
import * as Card from "../../UI/Card/Card";

type Proptype = {
  setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RegisterModal({ setIsRegistering }: Proptype) {
  const dispatch = useDispatch();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleRegister = async (event: SyntheticEvent) => {
    /**
     * Typeguard
     */
    if (!emailRef.current || !passwordRef.current) {
      throw Error(
        "`emailRef` or `passwordRef` are not assigned to an HTML element"
      );
    }
    /**
     *  Check form validity
     */
    // !!! Browser built-in prompt for invalid inputs will not pop up if event.preventDefault()
    if (
      !emailRef.current.validity.valid ||
      !passwordRef.current.validity.valid
    ) {
      return;
    }
    event.preventDefault();

    /**
     * Send registration request
     */
    await dispatch(
      registerThunk({
        newEmail: emailRef.current.value,
        newPassword: passwordRef.current.value,
      })
    );

    // close RegisterModal if successful
    setIsRegistering(false);
  };

  const handleClose = () => {
    setIsRegistering(false);
  };

  return (
    <BaseModalWrapper onClose={handleClose}>
      <Card.Header>Register as a new breeder!</Card.Header>
      <Card.Form id="registration-form">
        <Card.FormEntry>
          <Card.FormLabelSpan>Your eeemail:</Card.FormLabelSpan>
          <Card.FormInput
            type="email"
            placeholder="example@hedgehog.com"
            required
            ref={emailRef}
          />
        </Card.FormEntry>
        <Card.FormEntry>
          <Card.FormLabelSpan>Your seeecret phrase:</Card.FormLabelSpan>
          <Card.FormInput
            type="password"
            minLength={6}
            placeholder="min. 6 characters"
            required
            ref={passwordRef}
          />
        </Card.FormEntry>
      </Card.Form>
      <Card.ButtonsCtn>
        <Card.FormBtn form="registration-form" onClick={handleRegister}>
          Let's gooo!
        </Card.FormBtn>
      </Card.ButtonsCtn>
    </BaseModalWrapper>
  );
}
