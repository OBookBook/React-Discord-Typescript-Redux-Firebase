import { InitialChannelState } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialChannelState = {
  channelId: null,
  channelName: null,
};

export const channelSlice = createSlice({
  name: "channel",
  initialState, // ← プロパティ名と変数名が同じ場合、省略が可能 ↓
  //   initialState: initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = channelSlice.actions;
export default channelSlice.reducer;
