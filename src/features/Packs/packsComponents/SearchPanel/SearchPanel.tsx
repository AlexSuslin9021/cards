import React, { useEffect } from "react";
import Search from "common/component/Search/Search";
import { Range } from "features/Packs/packsComponents/SearchPanel/Range/Range";
import s from "features/Packs/packsComponents/SearchPanel/searchPanel.module.scss";
import { searchParamsAc } from "features/Packs/pack.slice";
import { MyAllButton } from "features/Packs/packsComponents/SearchPanel/MyAllButtons/MyAllButton";
import { ResetFilters } from "features/Packs/packsComponents/SearchPanel/ResetFiltres/ResetFilters";
import { useSearch } from "features/Packs/hooks/useSearch";

export const SearchPanel = () => {
  const { debounceValue, searchValue, onChangeInputHandler, onClickFilter, dispatch } = useSearch();

  useEffect(() => {
    dispatch(searchParamsAc({ packName: debounceValue }));
  }, [debounceValue]);

  return (
    <div className={s.dataCards}>
      <Search value={searchValue} callback={onChangeInputHandler}></Search>
      <MyAllButton />
      <Range />
      <ResetFilters onClickFilter={onClickFilter} />
    </div>
  );
};
