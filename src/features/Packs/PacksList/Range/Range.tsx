import React, { SyntheticEvent, useEffect, useState } from "react";
import s from "features/Packs/PacksList/Range/Range.module.scss";
import { Slider } from "@mui/material";

import { searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { useDebounce } from "common/hooks/useDebounce";

export const Range = () => {
  const minCardsCount = useAppSelector((state) => state.pack.packList.minCardsCount);
  const maxCardsCount = useAppSelector((state) => state.pack.packList.maxCardsCount);
  const [value1, setValue1] = useState<number>(minCardsCount);
  const [value2, setValue2] = useState<number>(maxCardsCount);
  const dispatch = useAppDispatch();

  const change = (event: Event | SyntheticEvent<Element, Event>, value: number | number[]) => {
    if (Array.isArray(value)) {
      setValue1(value[0]);
      setValue2(value[1]);
      dispatch(searchParamsAc({ min: value1, max: value2 }));
    }
  };

  const handleChange = (event: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      setValue1(value[0]);
      setValue2(value[1]);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.number}>
          <span> {value1}</span>
        </div>
        <Slider
          sx={{ width: "100px", margin: "0 15px 0 15px" }}
          value={[value1, value2]}
          onChange={handleChange}
          onChangeCommitted={change}
        />
        <div className={s.number}>
          <span> {value2}</span>
        </div>
      </div>
    </div>
  );
};
