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
  "https://neko-back.herokuapp.com/2.0)x",
  async (arg: ForgotPasswordType) => {
    await authApi.forgotPassword(arg);
    // return { profile: res.data };
  }
);

export type ProfileDomainType = {
  _id?: "644d432ec7db090b8cd48f34";
  email?: "alexsuslim@inbox.ru";
  rememberMe?: false;
  isAdmin?: false;
  name?: "alexsuslim@inbox.ru";
  verified?: false;
  publicCardPacksCount?: 0;
  created?: "2023-04-29T16:17:50.078Z";
  updated?: "2023-04-29T16:17:50.078Z";
  __v?: 0;
};

// export type UpdateDomainTaskType = {
//   title?: string
//   description?: string
//   status?: TaskStatuses
//   priority?: TaskPriorities
//   startDate?: string
//   deadline?: string
// }
// export const updateTaskTC = (idTodo: string, idTask: string, domainModel: UpdateDomainTaskType) => (dispatch: Dispatch, getState: () => AppStateType) => {
//
//   let task = getState().tasks[idTodo].find(t => t.id === idTask)
//   if (task) {
//     let model: TaskStatus = {
//       title: task.title,
//       description: task.description,
//       status: task.status,
//       priority: task.priority,
//       startDate: task.startDate,
//       deadline: task.deadline,
//       ...domainModel
//     }
//     dispatch(setStatusAC({status: 'loading'}))
//     taskApi.updateTask(idTodo, idTask, model).then((res) => {
//       if (res.data.resultCode === 0) {
//         dispatch(updateTaskAC({idTodo, idTask,api:domainModel}))
//         dispatch(setStatusAC({status: 'succeeded'}))
//       } else {
//         if (res.data.messages.length) {
//           dispatch(setErrorAC({error: res.data.messages[0]}))
//         } else {
//           dispatch(setErrorAC({error: 'Some error occurred'}))
//         }
//         dispatch(setStatusAC({status: 'failed'}))
//       }
//       dispatch(setStatusAC({status: 'idle'}))
//     })
//       .catch((e) => {
//         dispatch(setStatusAC({status: 'failed'}))
//         dispatch(setErrorAC(e.message))
//       })
//   }
// }
export const authThunks = { registerTC, loginTC, createNewPasswordTC };
