import { InitialUserState } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState, // ← プロパティ名と変数名が同じ場合、省略が可能 ↓
  //   initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
