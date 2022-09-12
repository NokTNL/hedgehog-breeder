import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Auth/authSlice";
import modalSlice from "../UI/Modal/modalSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
  },
});

// It is helpful to:
// - Export the shape of the whole store, i.e. `store.getState()`, e.g. for referring to the state shape in `useSelector`
// - Export the type of `store.dispatch`. It is configured with middlewares already so it can expect e.g. thunk actions as well; `useDispatch` by default only expects a standard Redux action object
export type RootState = ReturnType<typeof store.getState>;
// Note that the store (which comes from configureStore) already knows the shape of the store
export type AppDispatch = typeof store.dispatch;

export default store;
