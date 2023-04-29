import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { argRegisterType, authApi, authLoginType, ProfileType } from "features/auth/auth.api";

const authInitialState = {
  profile: null as ProfileType | null,
};

const slice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setProfile(state, action: PayloadAction<{ profile: ProfileType }>) {
      state.profile = action.payload.profile;
    },
  },
});

export const registerTC = createAsyncThunk("/auth/register", (arg: argRegisterType, thunkAPI) => {
  // const { dispatch, getState, rejectWithValue } = thunkAPI;
  authApi.register(arg).then((res) => {
    console.log(res.data.addedUser);
  });
});

export const loginTC = createAsyncThunk("/auth/login", (arg: authLoginType, thunkAPI) => {
  const { dispatch } = thunkAPI;
  authApi.login(arg).then((res) => {
    // dispatch( authLoginAc({profile: res.data}));
  });
});
export const authReducers = slice.reducer;
export const authLoginAc = slice.actions.setProfile;
export const authThunks = {
  registerTC,
  loginTC,
};
