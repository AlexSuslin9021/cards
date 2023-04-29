import { instance } from "common/api";

export const authApi = {
  register() {
    const payload = {
      email: "nya-admin@nya.nya",
      password: "1qazxcvBG",
    };
    return instance.post(" /auth/register", payload);
  },
};

type meType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number; // количество колод

  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;

  error?: string;
};
