import React, { useState } from "react";
import s from "./Pagination.module.scss";
import { useAppSelector } from "app/store";
import { useAppDispatch } from "app/hooks";
import { packsThunks } from "features/Packs/pack.slice";

export const Pagination = () => {
  const cardPacksTotalCount = useAppSelector((state) => state.pack.packList.cardPacksTotalCount);
  const pageCurrent = useAppSelector((state) => state.pack.queryParams.page);
  const dispatch = useAppDispatch();
  const onClickHandler = (page: number) => {
    dispatch(packsThunks.getPacksTC({ page: page, pageCount: 10 }));
  };
  const pageSize = 10;
  const portionSize = 10;
  let pageCount = Math.ceil(cardPacksTotalCount / pageSize);

  let page = [];
  for (let i = 1; i <= pageCount; i++) {
    page.push(i);
  }
  let portionCount = Math.ceil(cardPacksTotalCount / portionSize);
  // общее количество страниц / размер порции
  let [portionNumber, setPortionNumber] = useState(1);
  // номер порции
  let leftPortionSizeNumber = (portionNumber - 1) * portionSize + 1;
  // первая цифра порции слева
  let rightPortionSizeNumber = portionNumber * portionSize;
  // последняя цифра порции справа
  return (
    <div className={s.paginationBlock}>
      {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Back</button>}
      {page
        .filter((p) => p >= leftPortionSizeNumber && p <= rightPortionSizeNumber)
        .map((p, index) => (
          <span key={index} onClick={() => onClickHandler(p)} className={p === pageCurrent ? s.active : s.page}>
            {p}
          </span>
        ))}
      {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
    </div>
  );
};
