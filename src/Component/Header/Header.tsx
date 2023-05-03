import React from "react";
import s from "./Header.module.scss";
import { Button } from "common/component/Button/Button";
import { useAppSelector } from "app/store";
import { logoutTC } from "features/auth/auth.slice";
import { useAppDispatch } from "app/hooks";

export const Header = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  const name = useAppSelector((state) => {
    if (state.auth.profile !== null) return state.auth.profile.name;
  });
  const logoutButton = () => {
    dispatch(logoutTC());
  };

  return (
    <div className={s.header}>
      <div className={s.button}>{isLoggedIn ? <span>{name}</span> : <Button name={"Sign in"} />}</div>
    </div>
  );
};
