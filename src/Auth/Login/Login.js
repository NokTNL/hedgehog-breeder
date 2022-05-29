import { useRef } from "react";
import { useAuthContext, useAuthDispatch } from "../AuthContext";
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
  const { breederCredentials } = useAuthContext();
  const authDispatch = useAuthDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    /**
     * Check if user credentials are correct
     **/
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;
    const targetBreeder = breederCredentials.find(
      (breeder) => breeder.email === emailInput
    );

    if (
      targetBreeder === undefined ||
      targetBreeder.password !== passwordInput
    ) {
      alert("Incorrect breeder credentials!");
      return;
    }
    // *** TODO: Login (with laoding modal)
  };

  const handleChooseRegister = () => {
    authDispatch({ type: "IS_REGISTERING", payload: true });
  };
  return (
    <StyledLogin>
      <StyledCard>
        <CardItems.Header>Login to your incubator</CardItems.Header>
        <CardItems.Form>
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
          <CardItems.FormBtn onClick={handleLogin}>Logiiiin!</CardItems.FormBtn>
          <CardItems.FormBtn onClick={handleChooseRegister}>
            I am neeew to here...
          </CardItems.FormBtn>
        </CardItems.ButtonsCtn>
      </StyledCard>
    </StyledLogin>
  );
}
