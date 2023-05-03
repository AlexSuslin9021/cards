import React from "react";
import s from "./Header.module.scss";
import { Button } from "common/component/Button/Button";
import { useAppSelector } from "app/store";
import { logoutTC } from "features/auth/auth.slice";
import { useAppDispatch } from "app/hooks";

export const Header = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  const logoutButton = () => {
    dispatch(logoutTC());
  };

  return (
    <div className={s.header}>
      <div className={s.button}>{isLoggedIn ? <Button name={"Logout"} /> : <Button name={"Sign in"} />}</div>
    </div>
  );
};
