import { ChangeEvent, useState } from "react";

export const EditableSpan = () => {
  const [editMode, setEditMode] = useState<boolean>(true);
  const [value, setValue] = useState("x");
  const onClickHandler = () => {
    setEditMode(false);
  };
  const onBlurChange = () => {
    setEditMode(true);
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <>
      {editMode ? (
        <span onDoubleClick={onClickHandler}> {value} </span>
      ) : (
        <input value={value} onChange={onChangeHandler} onBlur={onBlurChange} />
      )}
    </>
  );
};
