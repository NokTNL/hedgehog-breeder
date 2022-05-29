import { useRef } from "react";
import { useAuthContext, useAuthDispatch } from "../AuthContext";
import { useDispatch } from "react-redux";
import registerThunk from "./registerThunk";

import BaseModalWrapper from "../../UI/Modal/BaseModalWrapper";
import * as Card from "../../UI/Card/Card";

export default function RegisterModal() {
  const { breederCredentials } = useAuthContext();
  const authDispatch = useAuthDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const handleRegister = async (event) => {
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
     * Check if user already exists
     **/
    const newEmail = emailRef.current.value;
    const newPassword = passwordRef.current.value;
    if (breederCredentials.some((breeder) => breeder.email === newEmail)) {
      alert(
        "There's already another breeder using this e-mail...please try another one."
      );
      return;
    }

    /**
     * Posting user creation request...
     */
    await dispatch(
      registerThunk({
        email: newEmail,
        password: newPassword,
      })
    );
    /**
     * ... but need to fake adding to remote database locally
     */
    authDispatch({
      type: "ADD_BREEDER",
      email: newEmail,
      password: newPassword,
    });
    alert("Registration successful!");
  };

  const handleClose = () => {
    authDispatch({ type: "IS_REGISTERING", payload: false });
  };

  return (
    <BaseModalWrapper onClose={handleClose}>
      <Card.Header>Register yourself!</Card.Header>
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
