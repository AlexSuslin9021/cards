import React from "react";
import { useAppDispatch } from "app/hooks";
import { authLoginType } from "features/auth/auth.api";
import { authThunks, loginTC } from "features/auth/auth.slice";

const Login = () => {
  const dispatch = useAppDispatch();
  const loginhandler = () => {
    const payload = {
      email: "alexsuslim@inbox.ru",
      password: "utnthj[hjyyjcnm",
      rememberMe: false,
    };
    dispatch(authThunks.loginTC(payload));
  };
  return (
    <div>
      <button onClick={loginhandler}> add</button>
      Login
    </div>
  );
};

export default Login;
