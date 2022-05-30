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
      const newUser = action.payload;
      // ** TODO: avoid duplicated user ids
      state.userData.push(newUser);
      break;
    case "deleteUser":
      const index = action.payload;
      state.userData.splice(index, 1);
      break;
    default:
      console.error(`UserDataContext: invalid action type ${action.type}`);
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
