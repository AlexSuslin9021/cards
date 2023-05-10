import React, { useState } from "react";
import s from "features/Packs/PacksList/Range/Range.module.scss";
import { Slider } from "@mui/material";
import { useAppSelector } from "app/store";

export const Range = () => {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(100);
  const minCardsCount = useAppSelector((state) => state.pack.packList.minCardsCount);
  const maxCardsCount = useAppSelector((state) => state.pack.packList.maxCardsCount);
  const change = (event: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      setValue1(minCardsCount);
      setValue2(value[1]);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.number}>
          <span> {minCardsCount}</span>
        </div>
        <Slider sx={{ width: "100px", margin: "0 15px 0 15px" }} value={[value1, value2]} onChange={change} />
        <div className={s.number}>
          <span> {maxCardsCount}</span>
        </div>
      </div>
    </div>
  );
};
