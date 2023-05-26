import React, { useState } from "react";
import s from "common/component/Pagination/Pagination.module.scss";
import { searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { SelectVariants } from "common/component/Select/Select";
import { cardPacksTotalCountSelector, pageCurrentSelector } from "features/Packs/selector";
import { cardsSearchParams } from "features/Cards/cards.slice";
type PaginationType = {
  name?: string;
};
export const Pagination: React.FC<PaginationType> = ({ name }) => {
  const cardPacksTotalCount = useAppSelector(cardPacksTotalCountSelector);
  const pageCurrent = useAppSelector(pageCurrentSelector);
  const dispatch = useAppDispatch();
  const onClickHandler = (page: number) => {
    return name === "cards"
      ? dispatch(cardsSearchParams({ page: page, pageCount: 10 }))
      : dispatch(searchParamsAc({ page: page, pageCount: 10 }));
  };
  const pageSize = 10;
  const portionSize = 10;
  let pageCount = Math.ceil(cardPacksTotalCount / pageSize);

  let page = [];
  for (let i = 1; i <= pageCount; i++) {
    page.push(i);
  }
  let portionCount = Math.ceil(cardPacksTotalCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionSizeNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionSizeNumber = portionNumber * portionSize;

  return (
    <div className={s.paginationBlock}>
      {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>{"<"}</button>}
      {page
        .filter((p) => p >= leftPortionSizeNumber && p <= rightPortionSizeNumber)
        .map((p, index) => (
          <span key={index} onClick={() => onClickHandler(p)} className={p === pageCurrent ? s.active : s.page}>
            {p}
          </span>
        ))}
      {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>{">"}</button>}
      <div>
        <SelectVariants />
      </div>
    </div>
  );
};
