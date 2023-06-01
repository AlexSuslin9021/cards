import React from "react";
import s from "features/Packs/packsComponents/SearchPanel/searchPanel.module.scss";
import filterData from "common/image/filter.svg";
import { deleteSearchParamsAC } from "features/Packs/pack.slice";
import { useAppDispatch } from "common/hooks";

export const ResetFilters = () => {
  const dispatch = useAppDispatch();
  const onClickFilter = () => {
    dispatch(dispatch(deleteSearchParamsAC({})));
  };
  return (
    <div className={s.icon}>
      <img onClick={onClickFilter} src={filterData} alt="" />
    </div>
  );
};
