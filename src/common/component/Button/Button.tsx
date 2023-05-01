import React from "react";
import s from "common/component/Button/button.module.scss";
type ButtonType = {
  name: string;
  // callback: () => void;
};

export const Button: React.FC<ButtonType> = (props) => {
  const onClickHandler = () => {
    // props.callback();
  };
  return (
    <button className={s.button} type={"submit"}>
      {" "}
      {props.name}{" "}
    </button>
  );
};
