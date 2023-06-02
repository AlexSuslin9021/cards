import React from "react";
import s from "./Loader.module.scss";
import { CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <div className={s.loader}>
      <CircularProgress />
    </div>
  );
};
