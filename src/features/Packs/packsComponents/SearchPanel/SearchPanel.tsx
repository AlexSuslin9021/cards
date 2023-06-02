import React, { useEffect, useState } from "react";
import Search from "common/component/Search/Search";
import { Range } from "features/Packs/packsComponents/TablePacks/Range/Range";
import s from "features/Packs/packsComponents/SearchPanel/searchPanel.module.scss";
import { searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch } from "common/hooks";
import { useDebounce } from "common/hooks/useDebounce";
import { MyAllButton } from "features/Packs/packsComponents/MyAllButtons/MyAllButton";
import { ResetFilters } from "features/Packs/packsComponents/ResetFiltres/ResetFilters";

export const SearchPanel = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce(value, 1000);

  useEffect(() => {
    dispatch(searchParamsAc({ packName: debounceValue }));
  }, [debounceValue]);

  const onChangeInputHandler = (value: string) => {
    setValue(value);
    dispatch(searchParamsAc({ packName: debounceValue }));
  };

  return (
    <div className={s.dataCards}>
      <Search value={value} callback={onChangeInputHandler}></Search>
      <MyAllButton />
      <Range />
      <ResetFilters />
    </div>
  );
};
