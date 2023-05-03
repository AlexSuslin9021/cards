import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

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
  },
});

export const appReducer = appSlice.reducer;

export const setIsLoggedInAC = appSlice.actions.setIsLoggedInAC;

export const setIsLoggedInTC = () => (dispatch: any) => {
  dispatch(setIsLoggedInAC({ isLoggedIn: false }));
};
