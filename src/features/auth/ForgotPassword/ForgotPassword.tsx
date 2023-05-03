import React from "react";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import { Form } from "common/component/Form/Form";
import { authThunks } from "features/auth/auth.slice";
import { Hint } from "common/component/Hint/Hint";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";
import { Navigate } from "react-router-dom";
import { Button } from "common/component/Button/Button";

export const ForgotPassword = () => {
  const Handler = () => {
    return <Navigate to={"/check-email"} />;
  };
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Forgot your password?"} />
        <Form callback={Handler} name={"Send Instructions"} toggle={false}>
          <Button name={"Send Instructions"} />
        </Form>
        <Hint description={"Did you remember your password?"} />
        <BottomAuth name={"Try logging in"} to={"/login"} />
      </div>
    </div>
  );
};
