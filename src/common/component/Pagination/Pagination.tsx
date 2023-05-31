import React, { useState } from "react";
import s from "common/component/Pagination/Pagination.module.scss";

import { useAppSelector } from "common/hooks";
import { SelectVariants } from "common/component/Select/Select";

import { RootState } from "app/store";
type PaginationType = {
  callback: (value: number) => void;
  totalCount: (state: RootState) => number;
  pageCurrents: (state: RootState) => number | undefined;
};
export const Pagination: React.FC<PaginationType> = ({ pageCurrents, totalCount, callback }) => {
  const cardPacksTotalCount = useAppSelector(totalCount);
  const pageCurrent = useAppSelector(pageCurrents);

  const onClickHandler = (page: number) => {
    callback(page);
  };
  const pageSize = 5;
  const portionSize = useAppSelector((state) => state.pack.queryParams.pageCount);
  let pageCount = Math.ceil(cardPacksTotalCount / pageSize);

  let page = [];
  for (let i = 1; i <= pageCount; i++) {
    page.push(i);
  }
  debugger;
  let portionCount = Math.ceil(cardPacksTotalCount / Number(portionSize));
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionSizeNumber = (portionNumber - 1) * Number(portionSize) + 1;
  let rightPortionSizeNumber = portionNumber * Number(portionSize);

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
