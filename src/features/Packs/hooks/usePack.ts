import { useAppDispatch, useAppSelector } from "common/hooks";
import {
  isLoggedInSelector,
  maxSelector,
  minSelector,
  packNameSelector,
  pageCountSelector,
  pageSelector,
  sortPacksSelector,
  user_idSelector,
} from "features/Packs/selector";
import { searchParamsAc } from "features/Packs/pack.slice";
import { useEffect } from "react";

export function usePack() {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const page = useAppSelector(pageSelector);
  const user_id = useAppSelector(user_idSelector);
  const max = useAppSelector(maxSelector);
  const min = useAppSelector(minSelector);
  const pageCount = useAppSelector(pageCountSelector);
  const sortPacks = useAppSelector(sortPacksSelector);
  const packName = useAppSelector(packNameSelector);

  const dispatch = useAppDispatch();
  const onClickHandler = (page: number) => {
    dispatch(searchParamsAc({ page: page, pageCount: 10 }));
  };
  return { onClickHandler, useEffect, page, user_id, max, min, pageCount, sortPacks, packName, isLoggedIn, dispatch };
}
