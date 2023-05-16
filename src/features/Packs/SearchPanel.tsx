import React, { useEffect, useState } from "react";
import { MiniTitle } from "features/Packs/commonComponent/MiniTitle/MiniTitle";
import Search from "features/Packs/commonComponent/Search/Search";
import { Range } from "features/Packs/PacksList/Range/Range";
import s from "./searchPanel.module.scss";
import { getPacksTC, searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch } from "common/hooks";
import { useDebounce } from "common/hooks/useDebounce";
import filterData from "../../common/Image/filter.svg";
const SearchPanel = () => {
  const onClickAllPack = () => {
    setMode(!mode);
    dispatch(searchParamsAc({ user_id: "" }));
  };
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce(value, 1000);
  const [mode, setMode] = useState(false);
  useEffect(() => {
    dispatch(searchParamsAc({ packName: debounceValue }));
  }, [debounceValue]);
  const onClickMyPack = () => {
    setMode(!mode);
    dispatch(searchParamsAc({ user_id: "64527e000415841fd8df2cf3" }));
  };
  const onChangeInputHandler = (value: string) => {
    setValue(value);
    dispatch(searchParamsAc({ packName: debounceValue }));
  };
  const onClickFilter = () => {
    dispatch(searchParamsAc({ user_id: "" }));
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
          <div>
            <button onClick={onClickMyPack} className={mode ? s.myCards : s.allCards}>
              My
            </button>
            <button onClick={onClickAllPack} className={!mode ? s.myCards : s.allCards}>
              All
            </button>
          </div>
        </div>
        <div className={s.sliderCont}>
          <MiniTitle name={" Number of cards"} />
          <Range />
        </div>
        <div className={s.icon}>
          <img onClick={onClickFilter} src={filterData} alt="" />
        </div>
      </div>
    </>
  );
};

export default SearchPanel;
