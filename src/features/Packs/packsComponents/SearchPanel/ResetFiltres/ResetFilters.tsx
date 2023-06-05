import React from "react";
import s from "features/Packs/packsComponents/SearchPanel/searchPanel.module.scss";
import filterData from "common/image/filter.svg";
import { useAppSelector } from "app/store";

type ResetFiltersType = {
  onClickFilter: () => void;
};
export const ResetFilters: React.FC<ResetFiltersType> = ({ onClickFilter }) => {
  const isLoggedInApp = useAppSelector<boolean>((state) => state.app.isLoggedIn);
  return (
    <span className={s.icon}>
      <img style={{ opacity: isLoggedInApp ? "0.5" : "1" }} onClick={onClickFilter} src={filterData} alt="" />
    </span>
  );
};
