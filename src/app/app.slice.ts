import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";
import { authApi } from "features/auth/auth.api";

const appInitialState = {
  error: null as string | null,
  isLoggedIn: false,
  isAppInitialized: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setIsLoggedInAC(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    isAppInitializedAC(state, action: PayloadAction<{ isAppInitialized: boolean }>) {
      state.isAppInitialized = true;
    },
  },
});

export const appReducer = appSlice.reducer;

export const setIsLoggedInAC = appSlice.actions.setIsLoggedInAC;
export const isAppInitializedAC = appSlice.actions.isAppInitializedAC;

export const setIsLoggedInTC = () => (dispatch: any) => {
  dispatch(setIsLoggedInAC({ isLoggedIn: false }));
};
export const initializedTC = createAppAsyncThunk("/auth/login", async () => {
  const res = await authApi.me();

  return { profile: res.data };
});
