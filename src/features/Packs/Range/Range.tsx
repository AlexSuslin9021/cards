import React, { useState } from "react";
import s from "features/Packs/Range/Range.module.scss";
import { Slider } from "@mui/material";

export const Range = () => {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(100);

  const change = (event: Event, value: number | number[]) => {
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
        <Slider sx={{ width: "100px", margin: "0 15px 0 15px" }} value={[value1, value2]} onChange={change} />
        <div className={s.number}>
          <span> {value2}</span>
        </div>
      </div>
    </div>
  );
};
