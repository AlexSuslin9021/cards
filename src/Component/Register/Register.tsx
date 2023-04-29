import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";

const Register = () => {
  const dispatch = useAppDispatch();
  const register = () => {
    const payload = {
      email: "alexsuslim@inbox.ru",
      password: "utnthj[hjyyjcnm",
    };
    dispatch(authThunks.registerTC(payload));
  };
  return (
    <div>
      Register
      <button onClick={register}> push</button>
    </div>
  );
};

export default Register;
