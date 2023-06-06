import { useAppDispatch } from "common/hooks/useAppDispatch";
import { useAppSelector } from "common/hooks/useAppSelector";
import { logoutTC } from "features/Auth/auth.slice";

export const useProfile = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn);
  const email = useAppSelector((state) => {
    if (state.auth.profile !== null) return state.auth.profile.email;
  });

  const onClickLogout = () => {
    dispatch(logoutTC());
  };
  return {
    isLoggedIn,
    email,
    onClickLogout,
  };
};
