import React from "react";
import s from "./Header.module.scss";
import { Button } from "common/component/Button/Button";
import { useAppSelector } from "app/store";

export const Header = () => {
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  debugger;
  return (
    <div className={s.header}>
      <div className={s.button}>{isLoggedIn ? <button>logout</button> : <Button name={"Sign in"} />}</div>
    </div>
  );
};
