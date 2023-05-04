import React from "react";
import { authThunks } from "features/auth/auth.slice";
import s from "Component/Login/ContainerLogin.module.scss";
import { Title } from "common/component/Title/Title";
import { Form } from "common/component/Form/Form";
import { BottomAuth } from "common/component/BottomAuth/BottomAuth";
import { Hint } from "common/component/Hint/Hint";
import { useAppSelector } from "app/store";
import { Navigate } from "react-router-dom";
import { Button } from "common/component/Button/Button";
import { FormTest, Input } from "common/component/Input/Input";

const Logintest = () => {
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className={s.containLogo}>
      <div className={s.login}>
        <Title name={"Sign in"} />
        <FormTest callback={authThunks.loginTC} defaultValues={{ email: "", password: "" }}>
          <Input name={"email"} />
          <Input type={"password"} name={"password"} />
          <Button name={"Sign in"} />
          <Hint description={"Don't have an account?"} />
          <BottomAuth name={"Sign up"} to={"/register"} />
        </FormTest>
        {/*<Hint description={"Don't have an account?"} />*/}
        {/*<BottomAuth name={"Sign up"} to={"/register"} />*/}
      </div>
    </div>
  );
};

export default Logintest;
