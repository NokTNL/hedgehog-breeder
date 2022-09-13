import { useRef } from "react";
import loginThunk from "./loginThunk";

import styled from "styled-components/macro";
import Card, * as CardItems from "../../UI/Card/Card";
import { useTypedDispatch } from "../../app/hooks";
// .tsx file needs tweaks for importing images
const bgSvg = require("../../images/hedgehog.svg") as string;

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

// This looks stupid but is necessary for passing setState func
type Proptype = {
  setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Login({ setIsRegistering }: Proptype) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Use our typed dispatch
  const dispatch = useTypedDispatch();

  const handleLogin = async (event: React.SyntheticEvent) => {
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

    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;

    // loginThunk() returns a thunk action (which is a FUNCTION). `dispatch()` will then return whatever is returned from the thunk (here it is Promise<void>)
    // You can `await` here if the thunk action is an async function
    dispatch(loginThunk({ emailInput, passwordInput }));
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
