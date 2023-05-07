import React, { useState } from "react";
import s from "./Pagination.module.scss";

export const Pagination = () => {
  const onClickHandler = () => {};
  
  const totalUsersCount = 120;
  const pageSize = 10;
  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let page = [];
  for (let i = 1; i <= pageCount; i++) {
    page.push(i);
  }

  return (
    <div className={s.paginationBlock}>
      {page.map((p, index) => (
        <span key={index} onClick={onClickHandler} className={p === index + 1 ? s.active : s.page}>
          {p}
        </span>
      ))}
    </div>
  );
};
