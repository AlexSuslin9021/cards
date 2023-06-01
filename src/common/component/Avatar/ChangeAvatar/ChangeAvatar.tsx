import React, { ChangeEvent } from "react";
import s from "common/component/Profile/Profile.module.scss";
import changePhoto from "common/image/changePhoto.svg";
import { convertFileToBase64 } from "common/utils/convertFileToBase64";
import { updateUserTC } from "features/Auth/auth.slice";
import { useAppDispatch } from "common/hooks";

export const ChangeAvatar = () => {
  const dispatch = useAppDispatch();

  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      console.log("file: ", file);

      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          dispatch(updateUserTC({ avatar: file64 }));
        });
      } else {
        console.error("Error: ", "Файл слишком большого размера");
      }
    }
  };
  return (
    <>
      <input style={{ display: "none" }} accept={"image/*"} onChange={onChangeAvatar} id={"image"} type="file" />
      <label htmlFor={"image"}>
        <img className={s.changePhoto} src={changePhoto} />
      </label>
    </>
  );
};
