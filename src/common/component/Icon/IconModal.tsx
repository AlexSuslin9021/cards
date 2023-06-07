import React from "react";
import s from "../MenuModal/menuModal.module.scss";

export const IconModal: React.FC<IconModalType> = ({ src, value, callback }) => {
  const iconStyle = { width: "14px", height: "14px" };
  return (
    <div onClick={callback}>
      <span className={s.str}>
        <img style={iconStyle} src={src} alt="" /> {value}
      </span>
    </div>
  );
};
type IconModalType = {
  src: string;
  value: string;
  callback?: (value: any) => void;
};
