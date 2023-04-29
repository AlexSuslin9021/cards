import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

const appInitialState = {
  error: null as string | null,
  isLoading: true,
  isAppInitialized: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setIsLoadingAC(state, action: PayloadAction<{ isLoading: boolean }>) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const appReducer = appSlice.reducer;

const setIsLoadingAC = appSlice.actions.setIsLoadingAC;

export const setIsloadingTC = () => (dispatch: any) => {
  dispatch(setIsLoadingAC({ isLoading: false }));
};
