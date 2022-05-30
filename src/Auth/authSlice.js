import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    breederCredentials: [],
    /** if !== "", the page is logged in */
    loginToken: "",
  },
  reducers: {
    addBreeder(state, action) {
      const { email, password } = action.payload;
      state.breederCredentials.push({
        email,
        password,
      });
    },
    login(state, action) {
      const token = action.payload;
      state.loginToken = token;
    },
  },
});

export default authSlice;
