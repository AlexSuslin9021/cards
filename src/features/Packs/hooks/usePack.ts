import { useAppDispatch, useAppSelector } from "common/hooks";
import {
  isLoggedInSelector,
  maxCardSelector,
  maxSelector,
  minSelector,
  packNameSelector,
  packSelector,
  pageCountSelector,
  pageSelector,
  sortPacksSelector,
  user_idSelector,
} from "features/Packs/packsSelector";
import { searchParamsAc } from "features/Packs/pack.slice";
import { useEffect } from "react";
import { isLoggedInSelect } from "app/selectorsApp";

export function usePack() {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const page = useAppSelector(pageSelector);
  const user_id = useAppSelector(user_idSelector);
  const max = useAppSelector(maxSelector);
  const min = useAppSelector(minSelector);
  const pageCount = useAppSelector(pageCountSelector);
  const sortPacks = useAppSelector(sortPacksSelector);
  const packName = useAppSelector(packNameSelector);
  const packs = useAppSelector(packSelector);
  const loading = useAppSelector(isLoggedInSelect);
  const maxCardsCount = useAppSelector(maxCardSelector);

  const dispatch = useAppDispatch();
  const onClickHandler = (page: number) => {
    dispatch(searchParamsAc({ page, pageCount }));
  };
  return {
    onClickHandler,
    maxCardsCount,
    page,
    user_id,
    max,
    min,
    pageCount,
    sortPacks,
    packName,
    isLoggedIn,
    packs,
    loading,
    dispatch,
  };
}
