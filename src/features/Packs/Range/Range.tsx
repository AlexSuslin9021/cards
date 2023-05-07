import React, { useState } from "react";
import s from "./Range.module.css";
import { Slider } from "@mui/material";

export function Range() {
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
        <div className={s.number}>{value1}</div>
        <Slider sx={{}} value={[value1, value2]} onChange={change} />
        <div className={s.number}>{value2}</div>
      </div>
    </div>
  );
}
