import s from "./Hint.module.scss";
import React from "react";

type HintType = {
  description: string;
};
export const Hint = (props: HintType) => {
  return <div className={s.hint}> {props.description}</div>;
};
