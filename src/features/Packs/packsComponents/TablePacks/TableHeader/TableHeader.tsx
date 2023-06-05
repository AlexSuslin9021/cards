import React, { useState } from "react";
import { searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsSearchParams } from "features/Cards/cards.slice";
import { sortPacksSelector } from "features/Packs/packsSelector";

type TableHeaderType = {
  sortName: string;
  headerName: string;
};
const TableHeader = (props: TableHeaderType) => {
  const dispatch = useAppDispatch();
  const sortPacks = useAppSelector(sortPacksSelector);
  const [changeFilter, setChangeFilter] = useState(false);
  const sortHandler = (name: string) => {
    props.sortName === "question"
      ? dispatch(cardsSearchParams({ sortCards: changeFilter ? `0${name}` : `1${name}` }))
      : dispatch(searchParamsAc({ sortPacks: sortPacks === `1${name}` ? `0${name}` : `1${name}` }));
    setChangeFilter(!changeFilter);
  };
  const arrow = sortPacks === `0${props.sortName}` ? "↓" : sortPacks === `1${props.sortName}` ? "↑" : "";
  return (
    <span onClick={() => sortHandler(props.sortName)}>
      {props.headerName}
      <span>{arrow}</span>
    </span>
  );
};

export default TableHeader;
