import { useAuthContext } from "./AuthContext";
import Login from "./Login/Login";
import RegisterModal from "./Register/RegisterModal";

export default function Auth() {
  const { isRegistering } = useAuthContext();
  return (
    <>
      <Login />
      {isRegistering && <RegisterModal />}
    </>
  );
}
