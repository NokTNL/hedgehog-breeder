import { AppDispatch, RootState } from "../app/store";

/**
 * @template ReturnType return type
 */
export type CustomThunkAction<ReturnType = void> = (
  dispatch: AppDispatch,
  getState: () => RootState
) => ReturnType;
