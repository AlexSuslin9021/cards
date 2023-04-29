import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {};

const slice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
});
export const authReducers = slice.reducer;
