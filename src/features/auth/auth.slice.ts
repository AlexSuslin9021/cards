import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { argRegisterType, authApi, authLoginType } from "features/auth/auth.api";

const authInitialState = {};

const slice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
});

export const registerTC = createAsyncThunk("/auth/register", (arg: argRegisterType, thunkAPI) => {
  // const { dispatch, getState, rejectWithValue } = thunkAPI;
  authApi.register(arg).then((res) => {
    console.log(res.data.addedUser);
  });
});

export const loginTC = createAsyncThunk("/auth/login", (arg: authLoginType, thunkAPI) => {
  // const { dispatch, getState, rejectWithValue } = thunkAPI;
  authApi.login(arg).then((res) => {
    console.log(res.data);
  });
});
export const authReducers = slice.reducer;
export const authThunks = {
  registerTC,
  loginTC,
};
