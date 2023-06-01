import React from "react";
import s from "common/component/Button/button.module.scss";
type ButtonType = {
  name?: string;
  callback?: () => any;
};

export const Button: React.FC<ButtonType> = (props) => {
  const buttonStyle =
    props.name === "Cancel"
      ? `${s.button} ${s.buttonCancel}`
      : props.name === "Delete"
      ? `${s.button} ${s.buttonDelete}`
      : s.button;

  const onClickHandler = () => {
    if (props.callback) props.callback();
  };
  return (
    <div>
      <button onClick={onClickHandler} className={buttonStyle} type={"submit"}>
        {props.name}
      </button>
    </div>
  );
};
