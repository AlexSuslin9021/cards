import { instance } from "common/api";
import axios from "axios";

export const authApi = {
  register(arg: argRegisterType) {
    return instance.post<RegisterResponseType>("/auth/register", arg);
  },
  login(arg: authLoginType) {
    return instance.post<ProfileType>("/auth/login", arg);
  },
  me() {
    return instance.post<ProfileType>("/auth/me", {});
  },
  updateUser(arg: UpdateUserType) {
    return instance.put<ProfileType>("/auth/me", arg);
  },
  logout() {
    return instance.delete("/auth/me");
  },
  forgotPassword(email: string, form: string, message: string) {
    return axios.post(
      "https://neko-back.herokuapp.com/2.0/auth/forgot",
      { email, form, message },
      { withCredentials: true }
    );
  },
  createNewPassword(arg: CreatePasswordType) {
    return instance.post("/auth/set-new-password", arg);
  },
};

// /auth/login
export type argRegisterType = {
  email: string;
  password: string;
};
export type CreatePasswordType = {
  password: string;
  resetPasswordToken: string;
};
export type SetNewPasswordType = {
  password: string;
  resetPasswordToken: string;
};

export type UpdateUserType = {
  name?: string;
  avatar?: string;
};
export type ForgotPasswordType = {
  email: string;
  from: string;
  message: string;
};

export type authLoginType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
type RegisterResponseType = {
  addedUser: ProfileType;
};
export type ProfileType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: string;
  created: string;
  updated: string;
  __v: number;
};

export type LoginResponse = {
  _id: "644d432ec7db090b8cd48f34";
  email: "alexsuslim@inbox.ru";
  rememberMe: false;
  isAdmin: false;
  name: "alexsuslim@inbox.ru";
  verified: false;
  publicCardPacksCount: 0;
  created: "2023-04-29T16:17:50.078Z";
  updated: "2023-04-29T16:57:41.399Z";
  __v: 0;
  token: "f42fe170-e6ae-11ed-83c8-e3cfd42ecbd9";
  tokenDeathTime: 1682798261386;
};
