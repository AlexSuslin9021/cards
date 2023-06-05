import React from "react";
import s from "features/Packs/packsComponents/SearchPanel/Range/Range.module.scss";
import { Slider } from "@mui/material";
import { MiniTitle } from "features/Packs/packsComponents/MiniTitle/MiniTitle";
import { useSearch } from "features/Packs/hooks/useSearch";
export const Range = () => {
  const { handleChange, change, disabled, valueRangeMin, valueRangeMax, minCardsCount, maxCardsCount } = useSearch();
  console.log(valueRangeMax);
  return (
    <div className={s.sliderCont}>
      <MiniTitle name={"Number of cards"} />
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.number}>
            <span> {valueRangeMin}</span>
          </div>
          <Slider
            sx={{ width: "100px", margin: "0 15px 0 15px" }}
            value={[valueRangeMin, valueRangeMax]}
            onChange={handleChange}
            onChangeCommitted={change}
            disabled={disabled}
            min={minCardsCount}
            max={maxCardsCount}
          />
          <div className={s.number}>
            <span> {valueRangeMax}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
