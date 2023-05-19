import React from "react";
import s from "common/component/Button/button.module.scss";
type ButtonType = {
  name?: string;
  callback?: () => void;
};

export const Button: React.FC<ButtonType> = (props) => {
  const onClickHandler = () => {
    if (props.callback) props.callback();
  };
  return (
    <div>
      <button
        onClick={onClickHandler}
        className={props.name === "Cancel" ? `${s.button} ${s.buttonCancel}` : s.button}
        type={"submit"}
      >
        {props.name}
      </button>
    </div>
  );
};
