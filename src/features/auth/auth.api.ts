import { instance } from "common/api";

export const authApi = {
  register(arg: argRegisterType) {
    return instance.post<RegisterResponseType>("/auth/register", arg);
  },
  login(arg: authLoginType) {
    return instance.post<ProfileType>("/auth/login", arg);
  },
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
// /auth/login
export type argRegisterType = {
  email: string;
  password: string;
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
  _id: "644d432ec7db090b8cd48f34";
  email: "alexsuslim@inbox.ru";
  rememberMe: false;
  isAdmin: false;
  name: "alexsuslim@inbox.ru";
  verified: false;
  publicCardPacksCount: 0;
  created: "2023-04-29T16:17:50.078Z";
  updated: "2023-04-29T16:17:50.078Z";
  __v: 0;
};
