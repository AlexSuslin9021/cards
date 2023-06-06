import { useAppDispatch } from "common/hooks/useAppDispatch";
import { useAppSelector } from "common/hooks/useAppSelector";
import { logoutTC } from "features/Auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useProfile = () => {
  const [open, setOpen] = useState(false);
  const name = useAppSelector((state) => {
    if (state.auth.profile !== null) return state.auth.profile.name;
  });
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  const email = useAppSelector((state) => {
    if (state.auth.profile !== null) return state.auth.profile.email;
  });
  const navigate = useNavigate();
  const logoutButton = () => {
    return navigate("/login");
  };
  const onClickProfile = () => {
    setOpen(false);
    navigate("/");
  };

  const onMouseMoveName = () => {
    setOpen(true);
  };
  const onMouseLeaveName = () => {
    setOpen(false);
    // return navigate("/");
  };
  const onClickLogout = () => {
    dispatch(logoutTC());
    setOpen(false);
  };
  return {
    isLoggedIn,
    email,
    onClickLogout,
    open,
    name,
    logoutButton,
    onMouseMoveName,
    onMouseLeaveName,
    setOpen,
    onClickProfile,
  };
};
