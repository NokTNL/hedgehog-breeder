import { createContext } from "react";
import { useState } from "react";
import Login from "./Login/Login";
import Register from "../Auth/Register/Register";

export const AuthContext = createContext({
  isRegistering: false,
  setIsRegistering: () => {},
});

export default function Auth() {
  // For toggling the <Register> page
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <AuthContext.Provider value={{ isRegistering, setIsRegistering }}>
      <Login />
      {isRegistering && <Register />}
    </AuthContext.Provider>
  );
}
