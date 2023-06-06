import React from "react";
import s from "common/component/MenuModal/menuModal.module.scss";

export const IconModal: React.FC<IconModalType> = ({ src, value }) => {
  const iconStyle = { width: "14px", height: "14px" };
  return (
    <span className={s.str}>
      <img style={iconStyle} src={src} alt="" /> {value}
    </span>
  );
};
type IconModalType = {
  src: string;
  value: string;
};
