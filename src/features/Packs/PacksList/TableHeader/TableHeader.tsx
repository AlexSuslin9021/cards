import React, { useState } from "react";
import s1 from "features/Packs/style.module.scss";
import { searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch } from "common/hooks";
import { cardsSearchParams } from "features/Cards/cards.slice";

type TableHeaderType = {
  sortName: string;
  headerName: string;
};
const TableHeader = (props: TableHeaderType) => {
  const dispatch = useAppDispatch();
  const [changeFilter, setChangeFilter] = useState(false);
  const sortHandler = (name: string) => {
    setChangeFilter(!changeFilter);
    props.sortName === "question"
      ? dispatch(cardsSearchParams({ cardQuestion: changeFilter ? `0${name}` : `1${name}` }))
      : dispatch(searchParamsAc({ sortPacks: changeFilter ? `0${name}` : `1${name}` }));
  };
  return (
    <span onClick={() => sortHandler(props.sortName)}>
      {props.headerName}
      <span className={s1.arrow}>{changeFilter ? "↓" : "↑"}</span>
    </span>
  );
};

export default TableHeader;
