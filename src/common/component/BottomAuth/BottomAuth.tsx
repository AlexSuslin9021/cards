import React from "react";
import s from "./BottomAuth.module.scss";
import { NavLink } from "react-router-dom";
type TitleType = {
  name: string;
  to: string;
};
export const BottomAuth = (props: TitleType) => {
  return (
    <NavLink to={props.to} className={s.description}>
      {props.name}
    </NavLink>
  );
};
