import React from "react";
import s from "common/component/Button/button.module.scss";
type ButtonType = {
  name?: string;
  callback?: () => any;
  disabled?: boolean;
};

export const Button: React.FC<ButtonType> = ({ disabled, callback, name }) => {
  const buttonStyle =
    name === "Cancel"
      ? `${s.button} ${s.buttonCancel}`
      : name === "Delete"
      ? `${s.button} ${s.buttonDelete}`
      : s.button;

  const onClickHandler = () => {
    if (callback) callback();
  };
  return (
    <div>
      <button disabled={disabled} onClick={onClickHandler} className={buttonStyle} type={"submit"}>
        {name}
      </button>
    </div>
  );
};
