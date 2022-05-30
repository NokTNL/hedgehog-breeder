import { createContext } from "react";
import { useImmerReducer } from "use-immer";

/**
 * Initial State & reducer
 */
const INIT_STATE = {
  hasDataLoaded: false,
  userData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loadData":
      state.userData = action.payload;
      state.hasDataLoaded = true;
      break;
    case "addUser":
    case "deleteUser":
      break;
    default:
      throw new Error(`UserDataContext: invalid action type ${action.type}`);
  }
};

/**
 * Custom Hook
 */
// Consuming INITIALISED state & dispatch for passing into a context's `value`
export const useUserData = () => {
  const [udState, udDispatch] = useImmerReducer(reducer, INIT_STATE);
  return [udState, udDispatch];
};

/**
 * Context
 */
const UserDataContext = createContext(null);

export default UserDataContext;
