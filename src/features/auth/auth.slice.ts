import { createSlice } from "@reduxjs/toolkit";
import {
  argRegisterType,
  authApi,
  authLoginType,
  CreatePasswordType,
  ForgotPasswordType,
  ProfileType,
  UpdateUserType,
} from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";

import { setIsLoggedInAC } from "app/app.slice";

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
    // builder.addCase(logoutTC.fulfilled, (state, action) => {
    //   state.profile = {};
    //   state.isLoggedIn = false;
    // });
    builder.addCase(registerTC.fulfilled, (state, action) => {});
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
export const logoutTC = createAppAsyncThunk("/auth/login", async () => {
  await authApi.logout();
  return { profile: {} };
});
export const createNewPasswordTC = createAppAsyncThunk<{}, CreatePasswordType>(
  "/auth/set-new-password",
  async (arg: CreatePasswordType) => {
    await authApi.createNewPassword(arg);
  }
);

export const forgotPasswordTC = createAppAsyncThunk(
  "https://neko-back.herokuapp.com/2.0/auth/forgot",
  async (email: string) => {
    let res = await authApi.forgotPassword(
      email,
      "test-front-admin",
      `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/#/set-new-password/$token$'>
link</a>
</div>`
    );
    return res.data;
  }
);

export const authThunks = { registerTC, loginTC, createNewPasswordTC, forgotPasswordTC };
