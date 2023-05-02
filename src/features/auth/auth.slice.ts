import { createSlice } from "@reduxjs/toolkit";
import { argRegisterType, authApi, authLoginType, ProfileType } from "features/auth/auth.api";

import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";

const authInitialState = {
  profile: null as ProfileType | null,
};

const slice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginTC.fulfilled, (state, action) => {
      state.profile = action.payload.profile;
    });
    builder.addCase(registerTC.fulfilled, (state, action) => {});
    builder.addCase(updateUserTC.fulfilled, (state, action) => {
      state.profile = action.payload.profile;
    });
  },
});
//AC
export const authReducers = slice.reducer;
//TC
export const registerTC = createAppAsyncThunk<void, argRegisterType>("/auth/register", async (arg) => {
  await authApi.register(arg);
});
export const updateUserTC = createAppAsyncThunk<{ profile: ProfileType }, authLoginType>("/auth/me", async (arg) => {
  let res = await authApi.updateUser(arg);
  return { profile: res.data };
});

export const loginTC = createAppAsyncThunk<{ profile: ProfileType }, authLoginType>("/auth/login", async (arg) => {
  let res = await authApi.login(arg);
  return { profile: res.data };
});

export const authThunks = { registerTC, loginTC };
