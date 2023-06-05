import { useAppDispatch } from "common/hooks";
import { useAppSelector } from "app/store";
import { SyntheticEvent, useState } from "react";
import { useDebounce } from "common/hooks/useDebounce";
import { deleteSearchParamsAC, searchParamsAc } from "features/Packs/pack.slice";
import { maxCardSelector, minCardSelector } from "features/Packs/packsSelector";
import { isLoggedInSelect } from "app/selectorsApp";

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const minCardsCount = useAppSelector(minCardSelector);
  const maxCardsCount = useAppSelector(maxCardSelector);
  const disabled = useAppSelector(isLoggedInSelect);
  const isLoggedInApp = useAppSelector<boolean>((state) => state.app.isLoggedIn);
  const [searchValue, setSearchValue] = useState<string>("");
  const [valueRangeMin, setValueRangeMin] = useState<number>(minCardsCount);
  const [valueRangeMax, setValueRangeMax] = useState<number>(maxCardsCount);
  const debounceValue = useDebounce(searchValue, 1000);
  const onChangeInputHandler = (value: string) => {
    setSearchValue(value);
    dispatch(searchParamsAc({ packName: debounceValue }));
  };

  const change = (event: Event | SyntheticEvent<Element, Event>, value: number | number[]) => {
    if (Array.isArray(value)) {
      setValueRangeMin(value[0]);
      setValueRangeMax(value[1]);
      dispatch(searchParamsAc({ min: valueRangeMin, max: valueRangeMax }));
    }
  };

  const handleChange = (event: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      setValueRangeMin(value[0]);
      setValueRangeMax(value[1]);
    }
  };

  const onClickFilter = () => {
    if (!isLoggedInApp) dispatch(dispatch(deleteSearchParamsAC({})));
    setSearchValue("");
  };
  return {
    debounceValue,
    isLoggedInApp,
    searchValue,
    onChangeInputHandler,
    onClickFilter,
    dispatch,
    handleChange,
    change,
    disabled,
    valueRangeMin,
    valueRangeMax,
    minCardsCount,
    maxCardsCount,
  };
};
