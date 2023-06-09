import React from "react";
import avatar from "common/image/ava.svg";
import { useAppSelector } from "common/hooks";

export const ProfilePhoto = () => {
  const ava = useAppSelector((state) => {
    if (state.auth.profile !== null) return state.auth.profile.avatar;
  });

  return <img src={ava ? ava : avatar} />;
};
