import { createSlice } from "@reduxjs/toolkit";
import {
  argRegisterType,
  authApi,
  authLoginType,
  CreatePasswordType,
  ProfileType,
  UpdateUserType,
} from "features/Auth/auth.api";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";
import { appActions } from "app/app.slice";
import { thunkTryCatch } from "common/utils/thunkTryCatch";

const authInitialState = {
  profile: null as ProfileType | null,
  isLoggedIn: false,
};

//TC

export const registerTC = createAppAsyncThunk<void, argRegisterType>("/Auth/register", async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await authApi.register(arg);
  });
});
export const updateUserTC = createAppAsyncThunk<{ profile: ProfileType }, UpdateUserType>(
  "/Auth/me",
  async (arg, thunkAPI) => {
    const { dispatch } = thunkAPI;
    return thunkTryCatch(thunkAPI, async () => {
      let res = await authApi.updateUser(arg);
      dispatch(initializedTC());
      return { profile: res.data };
    });
  }
);
export const updateAvatar = createAppAsyncThunk<{ profile: ProfileType }, UpdateUserType>(
  "/Auth/me",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      let res = await authApi.updateUser(arg);
      return { profile: res.data };
    });
  }
);

export const loginTC = createAppAsyncThunk<{ profile: ProfileType }, authLoginType>(
  "/Auth/login",
  async (arg, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      let res = await authApi.login(arg);
      return { profile: res.data };
    });
  }
);
export const logoutTC = createAppAsyncThunk<void>("Auth/me", async (any, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await authApi.logout();
  });
});
export const createNewPasswordTC = createAppAsyncThunk<{}, CreatePasswordType>(
  `/auth/set-new-password`,
  async (arg: CreatePasswordType, thunkAPI) => {
    // const tokenPassword = useParams().token;
    return thunkTryCatch(thunkAPI, async () => {
      let res = await authApi.createNewPassword(arg);

      return { profile: res.data };
    });
  }
);

export const forgotPasswordTC = createAppAsyncThunk("Auth/forgot", async (email: string) => {
  let res = await authApi.forgotPassword(
    email,
    "test-front-admin",
    `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href="http://localhost:3000/set-new-password/$token$">
link</a>
</div>`
  );
  return res.data;
});
export const initializedTC = createAppAsyncThunk("/new/pass", async () => {
  const res = await authApi.me();
  return { profile: res.data };
});
export const authThunks = { registerTC, loginTC, createNewPasswordTC, forgotPasswordTC, initializedTC };
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
    // builder.addCase(updateAvatar.fulfilled, (state, action) => {
    //   if (state.profile !== null) state.profile = action.payload.profile;
    // });
    builder.addCase(initializedTC.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.profile = action.payload.profile;
    });
  },
});
//AC
export const authReducers = slice.reducer;
