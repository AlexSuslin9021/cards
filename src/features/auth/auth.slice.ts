import { createSlice } from "@reduxjs/toolkit";
import {
  argRegisterType,
  authApi,
  authLoginType,
  CreatePasswordType,
  ProfileType,
  UpdateUserType,
} from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";

import { setIsLoggedInAC } from "app/app.slice";
import { useParams } from "react-router-dom";

const authInitialState = {
  profile: null as ProfileType | null,
  isLoggedIn: false,
  isAppInitialized: false,
};

const slice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginTC.fulfilled, (state, action) => {
      state.profile = action.payload.profile;
      state.isLoggedIn = true;
    });
    builder.addCase(logoutTC.fulfilled, (state, action) => {
      state.isLoggedIn = false;
    });
    builder.addCase(forgotPasswordTC.fulfilled, (state, action) => {
      state.isLoggedIn = true;
    });
    builder.addCase(updateUserTC.fulfilled, (state, action) => {
      if (state.profile !== null) state.profile = action.payload.profile;
    });
  },
});
//AC
export const authReducers = slice.reducer;
//TC
export const registerTC = createAppAsyncThunk<void, argRegisterType>("/auth/register", async (arg) => {
  await authApi.register(arg);
});
export const updateUserTC = createAppAsyncThunk<{ profile: ProfileType }, UpdateUserType>("/auth/me", async (arg) => {
  let res = await authApi.updateUser(arg);
  return { profile: res.data };
});

export const loginTC = createAppAsyncThunk<{ profile: ProfileType }, authLoginType>("/auth/login", async (arg) => {
  let res = await authApi.login(arg);

  return { profile: res.data };
});
export const logoutTC = createAppAsyncThunk<void>("auth/me", async () => {
  await authApi.logout();
});
export const createNewPasswordTC = createAppAsyncThunk<{}, CreatePasswordType>(
  `/auth/set-new-password`,
  async (arg: CreatePasswordType) => {
    debugger;
    // const tokenPassword = useParams().token;
    let res = await authApi.createNewPassword(arg);
    return res.data;
  }
);

export const forgotPasswordTC = createAppAsyncThunk("auth/forgot", async (email: string) => {
  let res = await authApi.forgotPassword(
    email,
    "test-front-admin",
    `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/set-new-password/$token$'>
link</a>
</div>`
  );
  return res.data;
});

export const authThunks = { registerTC, loginTC, createNewPasswordTC, forgotPasswordTC };
