import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    breederCredentials: [],
  },
  reducers: {
    addBreeder(state, action) {
      const { email, password } = action.payload;
      state.breederCredentials.push({
        email,
        password,
      });
    },
  },
});

export default authSlice;
