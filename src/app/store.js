import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../UI/Modal/modalSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },
});

export default store;
