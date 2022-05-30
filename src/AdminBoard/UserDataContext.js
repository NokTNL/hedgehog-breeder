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
    case "addUser": {
      const newUser = action.payload;
      for (const property of ["first_name", "avatar", "id"]) {
        const value = newUser[property];
        if (value === undefined || typeof value !== "string") {
          throw new Error(
            `UserDataContext.reducer.addUser: new user has invalid property ${property} of value ${value}`
          );
        }
      }
      state.userData.push(newUser);
      break;
    }
    case "deleteUser": {
      const index = action.payload;
      if (index >= state.userData.length) {
        throw new Error(
          `UserDataContext.reducer.deleteUser: index ${index} is larger than state.userData.length`
        );
      }
      state.userData.splice(index, 1);
      break;
    }
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
