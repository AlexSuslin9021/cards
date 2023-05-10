import React, { useState } from "react";
import s from "features/Packs/PacksList/Range/Range.module.scss";
import { Slider } from "@mui/material";
import { useAppSelector } from "app/store";
import { getPacksTC, packsThunks } from "features/Packs/pack.slice";
import { useAppDispatch } from "app/hooks";

export const Range = () => {
  const minCardsCount = useAppSelector((state) => state.pack.packList.minCardsCount);
  const maxCardsCount = useAppSelector((state) => state.pack.packList.maxCardsCount);
  const [value1, setValue1] = useState<number>(minCardsCount);
  const [value2, setValue2] = useState<number>(maxCardsCount);
  const dispatch = useAppDispatch();
  const change = (event: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      setValue1(value[0]);
      setValue2(value[1]);
      dispatch(packsThunks.getPacksTC({ min: value1, max: value2 }));
    }
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.number}>
          <span> {value1}</span>
        </div>
        <Slider sx={{ width: "100px", margin: "0 15px 0 15px" }} value={[value1, value2]} onChange={change} />
        <div className={s.number}>
          <span> {value2}</span>
        </div>
      </div>
    </div>
  );
};