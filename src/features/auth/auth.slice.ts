import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { argRegisterType, authApi, authLoginType, ProfileType } from "features/auth/auth.api";
import { Dispatch } from "redux";
import { AppDispatch, RootState } from "app/store";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";

const authInitialState = {
  profile: null as ProfileType | null,
};

const slice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    // setProfile(state, action: PayloadAction<{ profile: ProfileType }>) {
    //   state.profile = action.payload.profile;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(loginTC.fulfilled, (state, action) => {
      state.profile = action.payload.profile;
    });
  },
});

export const registerTC = createAppAsyncThunk<void, argRegisterType>("/auth/register", async (arg) => {
  // const { dispatch, getState, rejectWithValue } = thunkAPI;
  await authApi.register(arg);
});

export const loginTC = createAppAsyncThunk<{ profile: ProfileType }, authLoginType>("/auth/login", async (arg) => {
  // const { dispatch } = thunkAPI;
  let res = await authApi.login(arg);
  return { profile: res.data };
});
export const authReducers = slice.reducer;
// export const authLoginAc = slice.actions.setProfile;
export const authThunks = {
  registerTC,
  loginTC,
};
