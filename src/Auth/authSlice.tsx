import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BreederCredType = {
  email: string;
  password: string;
};

type AuthType = {
  breederCredentials: BreederCredType[];
  loginToken: string;
};

const initialState: AuthType = {
  breederCredentials: [],
  /** if !== "", the page is logged in */
  loginToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addBreeder(state, action: PayloadAction<BreederCredType>) {
      const { email, password } = action.payload;
      state.breederCredentials.push({
        email,
        password,
      });
    },
    login(state, action: PayloadAction<string>) {
      const token = action.payload;
      state.loginToken = token;
    },
  },
});

export default authSlice;
