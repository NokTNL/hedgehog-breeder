import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isBaseModalOpen: false,
    // loadingModalMsg === "" means the modal is not shown
    loadingModalMsg: "",
  },
  reducers: {
    showBaseModal(state, action) {
      state.isBaseModalOpen = !!action.payload;
    },
    loadModalMsg(state, action) {
      const msg = action.payload;
      if (typeof msg !== "string") {
        throw new Error(
          `modalSlice.loadModalMsg: payload ${msg} has improper type ${typeof msg}`
        );
      }
      state.loadingModalMsg = msg;
    },
  },
});

export default modalSlice;
