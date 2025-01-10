// https://redux-toolkit.js.org/api/configureStore
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./../features/userSlice";

export const sotre = configureStore({
  reducer: userReducer,
});
