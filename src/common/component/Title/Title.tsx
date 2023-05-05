import React from "react";
import s from "./title.module.scss";
type TitleType = {
  name: string;
};
export const Title = (props: TitleType) => {
  return <div className={s.title}>{props.name}</div>;
};
