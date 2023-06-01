import React, { useEffect, useState } from "react";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import Search from "common/component/Search/Search";
import { Range } from "features/Packs/PacksList/Range/Range";
import s from "features/Packs/SearchPanel/searchPanel.module.scss";
import { deleteSearchParamsAC, searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { useDebounce } from "common/hooks/useDebounce";
import filterData from "common/image/filter.svg";
import { Buttons } from "features/Packs/commonComponent/MyAllButtons/MyAllButton";
import { maxCardSelector, maxSelector, minSelector } from "features/Packs/packsSelector";

export const SearchPanel = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce(value, 1000);
  const minCardsCount = useAppSelector(minSelector);
  const maxCardsCount = useAppSelector(maxCardSelector);

  useEffect(() => {
    dispatch(searchParamsAc({ packName: debounceValue }));
  }, [debounceValue]);

  const onChangeInputHandler = (value: string) => {
    setValue(value);
    dispatch(searchParamsAc({ packName: debounceValue }));
  };
  const onClickFilter = () => {
    dispatch(dispatch(deleteSearchParamsAC({})));
    setValue("");
  };
  return (
    <>
      <div className={s.dataCards}>
        <div className={s.search}>
          <MiniTitle name={"Search"} />
          <Search value={value} callback={onChangeInputHandler}></Search>
        </div>
        <div className={s.choiceCards}>
          <MiniTitle name={" Show packs cards"} />
          <Buttons />
        </div>
        <div className={s.sliderCont}>
          <MiniTitle name={"Number of cards"} />
          <Range max={maxCardsCount} />
        </div>
        <div className={s.icon}>
          <img onClick={onClickFilter} src={filterData} alt="" />
        </div>
      </div>
    </>
  );
};
