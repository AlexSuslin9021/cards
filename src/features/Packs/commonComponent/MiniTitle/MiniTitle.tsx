import React from "react";
import s from "./MiniTitle.module.scss";
type MiniTitleType = {
  name: string;
};
export const MiniTitle: React.FC<MiniTitleType> = ({ name }) => {
  return <div className={s.title}>{name}</div>;
};
