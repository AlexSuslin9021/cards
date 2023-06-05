import React, { useState } from "react";
import s from "common/component/Header/Header.module.scss";
import { Button } from "common/component/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "common/hooks";
import { ProfilePhoto } from "common/component/Avatar/ProfilePhoto/ProfilePhoto";
import { MenuModal } from "common/component/MenuModal/MenuModal";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  const name = useAppSelector((state) => {
    if (state.auth.profile !== null) return state.auth.profile.name;
  });
  const navigate = useNavigate();
  const logoutButton = () => {
    return navigate("/login");
  };

  const onMouseMoveName = () => {
    setOpen(true);
    // return navigate("/");
  };
  const onMouseLeaveName = () => {
    setOpen(false);
    // return navigate("/");
  };

  return (
    <div className={s.header}>
      <div onMouseMove={onMouseMoveName} onMouseLeave={onMouseLeaveName} className={s.button}>
        {isLoggedIn ? (
          <div className={s.loginAvatar}>
            <span onClick={() => setOpen(true)}>{name}</span>
            <ProfilePhoto />
            {open && <MenuModal />}
          </div>
        ) : (
          <Button callback={logoutButton} name={"Sign in"} />
        )}
      </div>
    </div>
  );
};
