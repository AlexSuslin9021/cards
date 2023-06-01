import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { updateUserTC } from "features/Auth/auth.slice";
import s from "common/component/Profile/EditableSpan/EditableSpan.module.scss";

export const EditableSpan = () => {
  const name = useAppSelector<any>((state) => {
    if (state.auth.profile !== null) return state.auth.profile.name;
  });
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState<boolean>(true);
  const [value, setValue] = useState(name);
  const onClickHandler = () => {
    setEditMode(false);
  };
  const onBlurChange = () => {
    setEditMode(true);
    dispatch(updateUserTC({ name: value }));
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div>
      {editMode ? (
        <div className={s.imageContainer}>
          <span onDoubleClick={onClickHandler}>{value}</span>
        </div>
      ) : (
        <input value={value} onChange={onChangeHandler} onBlur={onBlurChange} />
      )}
    </div>
  );
};