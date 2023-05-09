import React, { useState } from "react";
import s from "./Pagination.module.scss";
import { useAppSelector } from "app/store";

export const Pagination = () => {
  const cardPacksTotalCount = useAppSelector((state) => state.pack.packList.cardPacksTotalCount);
  const query = useAppSelector((state) => state.pack.queryParams);

  const onClickHandler = () => {};
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
          <span key={index} onClick={onClickHandler} className={p === index + 1 ? s.active : s.page}>
            {p}
          </span>
        ))}
      {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
    </div>
  );
};
