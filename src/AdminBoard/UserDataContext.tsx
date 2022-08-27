import { createContext } from "react";
import { useImmerReducer } from "use-immer";

/**
 * Initial State
 */
// 🤯
export type UserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type StateType = {
  hasDataLoaded: boolean;
  userData: UserData[];
};
const INIT_STATE: StateType = {
  hasDataLoaded: false,
  userData: [],
};

/**
 * Reducer
 */
type Action =
  | { type: "loadData"; payload: UserData[] }
  | { type: "addUser"; payload: UserData }
  | { type: "deleteUser"; payload: number };

const reducer = (state: StateType, action: Action) => {
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
    // default:
    //   console.error(`UserDataContext: invalid action type ${action.type}`);
  }
};

/**
 * Custom Hook
 */
// Consuming INITIALISED state & dispatch for passing into a context's `value`
export const useUserData = () => {
  const stateDispatchTuple = useImmerReducer(reducer, INIT_STATE);
  return stateDispatchTuple;
};

/**
 * Context
 */
type ContextType = ReturnType<typeof useUserData>;
const UserDataContext = createContext<ContextType | null>(null);

export default UserDataContext;
