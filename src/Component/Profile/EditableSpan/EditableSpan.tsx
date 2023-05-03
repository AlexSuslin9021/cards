import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppSelector } from "app/store";
import { ProfileType } from "features/auth/auth.api";
import { useAppDispatch } from "app/hooks";
import { updateUserTC } from "features/auth/auth.slice";

export const EditableSpan = () => {
  const name = useAppSelector<any>((state) => state.auth.profile);
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState<boolean>(true);
  const [value, setValue] = useState(name.name);
  const onClickHandler = () => {
    setEditMode(false);
  };
  const onBlurChange = () => {
    dispatch(updateUserTC({ name: value }));
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
