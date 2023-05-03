import React from "react";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import { Form } from "common/component/Form/Form";
import { authThunks } from "features/auth/auth.slice";
import { Hint } from "common/component/Hint/Hint";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";

export const ForgotPassword = () => {
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Forgot your password?"} />
        <Form callback={authThunks.forgotPasswordTC} name={"Send Instructions"} toggle={false} />
        <Hint description={"Did you remember your password?"} />
        <BottomAuth name={"Try logging in"} to={"/login"} />
      </div>
    </div>
  );
};
