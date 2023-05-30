import React from "react";
import avatar from "common/Image/ava.svg";
import { useAppSelector } from "common/hooks";

export const Avatar = () => {
  const ava = useAppSelector((state) => {
    if (state.auth.profile !== null) return state.auth.profile.avatar;
  });
  debugger;
  return <img src={ava ? ava : avatar} />;
};
