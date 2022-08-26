import { useState } from "react";
import Login from "./Login/Login";
import RegisterModal from "./Register/RegisterModal";

export default function Auth() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <>
      <Login setIsRegistering={setIsRegistering} />
      {isRegistering && <RegisterModal setIsRegistering={setIsRegistering} />}
    </>
  );
}
