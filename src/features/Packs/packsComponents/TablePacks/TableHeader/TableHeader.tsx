import React, { useState } from "react";
import { searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsSearchParams } from "features/Cards/cards.slice";

type TableHeaderType = {
  sortName: string;
  headerName: string;
};
const TableHeader = (props: TableHeaderType) => {
  const dispatch = useAppDispatch();

  const sortCards = useAppSelector;
  const [changeFilter, setChangeFilter] = useState(false);
  const sortHandler = (name: string) => {
    debugger;
    props.sortName === "question"
      ? dispatch(cardsSearchParams({ sortCards: changeFilter ? `0${name}` : `1${name}` }))
      : dispatch(searchParamsAc({ sortPacks: changeFilter ? `0${name}` : `1${name}` }));
    setChangeFilter(!changeFilter);
  };
  return (
    <span onClick={() => sortHandler(props.sortName)}>
      {props.headerName}
      <span>{changeFilter ? "↓" : "↑"}</span>
    </span>
  );
};

export default TableHeader;
