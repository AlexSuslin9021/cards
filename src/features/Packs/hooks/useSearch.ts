import { useAppDispatch } from "common/hooks";
import { useAppSelector } from "app/store";
import { SyntheticEvent, useEffect, useLayoutEffect, useState } from "react";
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
  // const [isFirstChanges, setIsFirstChanges] = useState(true);

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
  // useLayoutEffect(() => {
  //   if (maxCardsCount !== 0 && isFirstChanges) {
  //     setValueRangeMax(maxCardsCount);
  //     setIsFirstChanges(false);
  //   }
  // }, [maxCardsCount, isFirstChanges]);

  const onClickFilter = () => {
    if (!isLoggedInApp) dispatch(dispatch(deleteSearchParamsAC({})));
    setSearchValue("");
  };
  console.log(valueRangeMax);
  return {
    setValueRangeMax,
    setValueRangeMin,
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
