import { AppDispatch, RootState } from "app/store";
import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { appActions } from "app/app.slice";
import { AxiosError, isAxiosError } from "axios";

export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>, logic: Function) => {
  const { dispatch, rejectWithValue } = thunkAPI;

  try {
    dispatch(appActions.setIsLoggedInAC({ isLoggedIn: true }));
    return await logic();
  } catch (e) {
    const err = e as Error | AxiosError<{ error: string }>;
    if (isAxiosError(err)) {
      const error = err.response ? err.response.data.error : err.message;
      dispatch(appActions.setIsLoggedInAC({ isLoggedIn: false }));
      dispatch(appActions.setAppError({ error }));
    } else {
      dispatch(appActions.setAppError({ error: `Native error ${err.message}` }));
    }
    return rejectWithValue(null);
  } finally {
    dispatch(appActions.setIsLoggedInAC({ isLoggedIn: false }));
  }
};
