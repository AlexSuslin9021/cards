import React from "react";
import s from "features/Packs/packsComponents/SearchPanel/searchPanel.module.scss";
import filterData from "common/image/filter.svg";

type ResetFiltersType = {
  onClickFilter: () => void;
};
export const ResetFilters: React.FC<ResetFiltersType> = ({ onClickFilter }) => {
  return (
    <div className={s.icon}>
      <img onClick={onClickFilter} src={filterData} alt="" />
    </div>
  );
};
