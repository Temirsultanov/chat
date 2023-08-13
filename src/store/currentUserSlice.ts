/* eslint-disable @typescript-eslint/no-unused-vars */

import { CurrentUser, UserName } from "../lib/types";
import { createSlice } from "@reduxjs/toolkit";
import { setCurrentUser, updateCurrentUserName } from "./actions";

export type SliceState = CurrentUser | null;
const initialState: SliceState = null;

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    set: (state: SliceState, action: { type: string, payload: CurrentUser}) => {
      state = action.payload
    },
    remove: (state: SliceState) => {
      state = null;
    },
    updateName: (state: SliceState, action: { type: string, payload: UserName }) => {
      if (state !== null) {
        state.name = action.payload
      }
    }
  }
})

export const { set, remove, updateName } = currentUserSlice.actions;

export default currentUserSlice.reducer;

set(setCurrentUser({ login: "", name: "", token: ""}))
updateName(updateCurrentUserName("Hello"));