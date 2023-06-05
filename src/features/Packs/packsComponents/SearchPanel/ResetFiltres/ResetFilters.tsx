import React from "react";
import s from "features/Packs/packsComponents/SearchPanel/searchPanel.module.scss";
import filterData from "common/image/filter.svg";
import { useAppSelector } from "app/store";
import { MiniTitle } from "features/Packs/packsComponents/MiniTitle/MiniTitle";

type ResetFiltersType = {
  onClickFilter: () => void;
};
export const ResetFilters: React.FC<ResetFiltersType> = ({ onClickFilter }) => {
  const isLoggedInApp = useAppSelector<boolean>((state) => state.app.isLoggedIn);
  return (
    <div>
      <div className={s.filter}>filter</div>
      <div className={s.icon}>
        <img style={{ opacity: isLoggedInApp ? "0.5" : "1" }} onClick={onClickFilter} src={filterData} alt="" />
      </div>
    </div>
  );
};
