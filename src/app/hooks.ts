import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// react-redux does NOT know the setup of Redux. Its job is only to consume the store from the Redux provider
// Therefore, you need to tell React-Redux the types used in our Redux
// Since all components that uses react-redux need this info, it's useful to have TYPED custom hooks for using useSelector & useDispatch
// To do this, we literally just make a new function that is IDENTICAL to the react-redux hook function but EXPLICITLY define the type it should expect:
// Recall that we use useDispatch in a component like this:
/**
 * const dispatch = useDispatch()
 */
// useDispatch has the type: () => Dispatch by default. Instead it should be:
//                                 v typeof store.dispatch
export const useTypedDispatch: () => AppDispatch = useDispatch;
// For `useSelector` in a component:
/**
 * const myStateSlice = useSelector(state: RootState => state.certainSlice)
 */
// React-Redux has a helper type, `TypedUseSelectorHook`, that has exactly the same shape as useSelector but let you provide the RootState type:

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// Note: the below doesn't allow TS to refer to the type of the selcted slice from `useSelector` properly:
// export const useTypedSelector = useSelector<RootState>;
