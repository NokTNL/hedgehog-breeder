import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isBaseModalOpen: false,
    // loadingModalMsg === "" means the modal is not shown
    loadingModalMsg: "",
  },
  reducers: {
    showBaseModal(state, action: PayloadAction<boolean>) {
      state.isBaseModalOpen = action.payload;
    },
    loadModalMsg(state, action: PayloadAction<string>) {
      const msg = action.payload;
      state.loadingModalMsg = msg;
    },
  },
});

export default modalSlice;
