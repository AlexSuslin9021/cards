import React from "react";
import s from "./Header.module.scss";
import { Button } from "common/component/Button/Button";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.button}>
        <Button name={"Sign in"} />
      </div>
    </div>
  );
};
