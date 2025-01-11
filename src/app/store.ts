import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./../features/userSlice";
import channelReducer from "./../features/channelSlice";

// https://redux-toolkit.js.org/api/configureStore
export const store = configureStore({
  reducer: {
    user: userReducer,
    channel: channelReducer,
  },
});

// https://redux.js.org/usage/usage-with-typescript#define-typed-hooks
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
