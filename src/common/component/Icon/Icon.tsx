import React from "react";
import s from "./icon.module.scss";

export const Icon: React.FC<IconType> = ({ src }) => {
  return <span>{src.includes("base64") && <img className={s.icon} src={src} alt="" />}</span>;
};
type IconType = {
  src: string;
};
export default Icon;
