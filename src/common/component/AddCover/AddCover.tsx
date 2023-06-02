import React, { ChangeEvent } from "react";
import { convertFileToBase64 } from "common/utils/convertFileToBase64";
import s from "./AddCover.module.scss";
type AddCoverType = {
  setFile: (file: string) => void;
  name: string;
};

export const AddCover: React.FC<AddCoverType> = ({ setFile, name }) => {
  const onChangeCover = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          setFile(file64);
        });
      } else {
        console.error("Error: ", "Файл слишком большого размера");
      }
    }
  };
  return (
    <div className={s.coverBlock}>
      <input style={{ display: "none" }} accept={"image/*"} onChange={onChangeCover} id={"download"} type="file" />
      <label htmlFor={"download"}>
        <div className={s.button} id={"download"}>
          <span> {name}</span>
        </div>
      </label>
    </div>
  );
};
