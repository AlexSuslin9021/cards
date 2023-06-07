import React, { useState } from "react";
import { searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { cardsSearchParams } from "features/Cards/cards.slice";
import { sortPacksSelector } from "features/Packs/packsSelector";
import { sortCardsSelector } from "features/Cards/cardsSelectors";

type TableHeaderType = {
  sortName: string;
  headerName: string;
};
const TableHeader: React.FC<TableHeaderType> = ({ sortName, headerName }) => {
  const dispatch = useAppDispatch();
  const sortPacks = useAppSelector(sortPacksSelector);
  const sortCards = useAppSelector(sortCardsSelector);
  const [changeFilter, setChangeFilter] = useState(false);
  const arrowPacks = sortPacks === `0${sortName}` ? "↓" : sortPacks === `1${sortName}` ? "↑" : "";
  const arrowCards = sortCards === `0${sortName}` ? "↓" : sortCards === `1${sortName}` ? "↑" : "";
  const arrow = arrowPacks ? arrowPacks : arrowCards;
  const sortHandler = (name: string) => {
    sortName === "question"
      ? dispatch(cardsSearchParams({ sortCards: sortCards === `1${name}` ? `0${name}` : `1${name}` }))
      : dispatch(searchParamsAc({ sortPacks: sortPacks === `1${name}` ? `0${name}` : `1${name}` }));
    setChangeFilter(!changeFilter);
  };

  return (
    <span onClick={() => sortHandler(sortName)}>
      {headerName}
      <span>{arrow}</span>
    </span>
  );
};

export default TableHeader;
