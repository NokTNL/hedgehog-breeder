import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Auth/authSlice";
import modalSlice from "../UI/Modal/modalSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
