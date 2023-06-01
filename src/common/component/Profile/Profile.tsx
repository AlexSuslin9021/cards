import React, { ChangeEvent } from "react";
import s from "common/component/Profile/Profile.module.scss";
import style from "common/styles/container.module.scss";
import { Title } from "common/component/Title/Title";
import { EditableSpan } from "common/component/Profile/EditableSpan/EditableSpan";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { Navigate } from "react-router-dom";
import { logoutTC, updateUserTC } from "features/auth/auth.slice";
import changePhoto from "common/image/changePhoto.svg";
import { BackTo } from "common/component/BackTo/BackTo";
import { Avatar } from "common/component/Avatar/Avatar";
import { convertFileToBase64 } from "common/utils/convertFileToBase64";

const Profile = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);

  const email = useAppSelector((state) => {
    if (state.auth.profile !== null) return state.auth.profile.email;
  });

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

  const onClickLogout = () => {
    dispatch(logoutTC());
  };
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className={style.container}>
      <BackTo name={"Back to MyPack List"} link={"/packs/all"} />
      <Title name={"Personal Information"} />
      <div className={s.iconContainer}>
        <Avatar />
        <input style={{ display: "none" }} accept={"image/*"} onChange={onChangeAvatar} id={"image"} type="file" />
        <label htmlFor={"image"}>
          <img className={s.changePhoto} src={changePhoto} />
        </label>
      </div>
      <EditableSpan />
      <div className={s.email}> {email}</div>
      <button className={s.button} onClick={onClickLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
