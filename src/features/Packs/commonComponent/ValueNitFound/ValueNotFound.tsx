import React from "react";
import s from "./valueNotFound.module.scss";
type ValueNotFoundType = {
  value: string;
};
export const ValueNotFound: React.FC<ValueNotFoundType> = ({ value }) => {
  return <div className={s.value}>{value}</div>;
};
