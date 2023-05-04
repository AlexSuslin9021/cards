import { ChangeEvent, useState } from "react";
import { useAppSelector } from "app/store";
import { useAppDispatch } from "app/hooks";
import { updateUserTC } from "features/auth/auth.slice";
import s from "../EditableSpan/EditableSpan.module.scss";
import pencil from "../../../common/Image/pencil.svg";

export const EditableSpan = () => {
  debugger;
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
          {/*<img src={pencil} alt="change name" />*/}
        </div>
      ) : (
        <input value={value} onChange={onChangeHandler} onBlur={onBlurChange} />
      )}
    </div>
  );
};
