// This Context stores the auth state
import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";

/**
 * States & Reducers
 */
const AUTH_INIT_STATE = {
  /** When true, show RegisterModal */
  isRegistering: false,
  /** Registered credentials stored here INSECURELY because the API is fake... */
  breederCredentials: [],
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "IS_REGISTERING":
      return { ...state, isRegistering: action.payload };
    case "ADD_BREEDER":
      state.breederCredentials.push({
        email: action.email,
        password: action.password,
      });
      // Close the RegisterModal
      state.isRegistering = false;
      break;
    default:
      throw new Error(`authReducer: Unknown action type ${action.type}`);
  }
};

/**
 * Contexts
 */
const AuthContext = createContext(null);
const AuthDispatchContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useImmerReducer(
    authReducer,
    AUTH_INIT_STATE
  );
  return (
    <AuthContext.Provider value={authState}>
      <AuthDispatchContext.Provider value={authDispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

/**
 * Custom Hooks
 */

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const useAuthDispatch = () => {
  return useContext(AuthDispatchContext);
};
