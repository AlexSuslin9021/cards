import React from "react";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import { Form } from "common/component/Form/Form";
import { authThunks } from "features/auth/auth.slice";
import { Hint } from "common/component/Hint/Hint";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";

export const SetNewPassword = () => {
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Set new password"} />
        <Form callback={authThunks.loginTC} name={"Set new password"} toggle={true} />
        <Hint description={"Don't have an account?"} />
        <BottomAuth name={"Sign up"} to={"/register"} />
      </div>
    </div>
  );
};
