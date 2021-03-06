import { useRef } from "react";
import { useDispatch } from "react-redux";
import loginThunk from "./loginThunk";

import styled from "styled-components/macro";
import Card, * as CardItems from "../../UI/Card/Card";
import bgSvg from "../../images/hedgehog.svg";

const StyledLogin = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-image: url(${bgSvg});
  background-size: 4rem;
`;

const StyledCard = styled(Card)`
  border: 0.1rem solid gray;
  margin: 1rem;
`;

const StyledHeader = styled(CardItems.Header)`
  color: #cb2829;
`;

const LoginBtn = styled(CardItems.FormBtn)`
  border: none;
  background-color: #2d3bff;
  color: white;
  font-size: 1.1rem;
`;

export default function Login({ setIsRegistering }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
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

    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;

    await dispatch(loginThunk({ emailInput, passwordInput }));
  };

  const handleChooseRegister = () => {
    setIsRegistering(true);
  };

  return (
    <StyledLogin>
      <StyledCard>
        <StyledHeader>Login to your incubator</StyledHeader>
        <CardItems.Form id="login-form">
          <CardItems.FormEntry>
            <CardItems.FormLabelSpan>Your eeemail:</CardItems.FormLabelSpan>
            <CardItems.FormInput
              type="email"
              placeholder="example@hedgehog.com"
              required
              ref={emailRef}
            />
          </CardItems.FormEntry>
          <CardItems.FormEntry>
            <CardItems.FormLabelSpan>
              Your seeecret phrase:
            </CardItems.FormLabelSpan>
            <CardItems.FormInput
              type="password"
              placeholder="!@#$%^*(..."
              required
              ref={passwordRef}
            />
          </CardItems.FormEntry>
        </CardItems.Form>
        <CardItems.ButtonsCtn>
          <LoginBtn form="login-form" onClick={handleLogin}>
            Logiiiin!
          </LoginBtn>
          <CardItems.FormBtn onClick={handleChooseRegister}>
            I am neeew to here...
          </CardItems.FormBtn>
        </CardItems.ButtonsCtn>
      </StyledCard>
    </StyledLogin>
  );
}
