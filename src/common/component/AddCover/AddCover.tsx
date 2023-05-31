import React, { ChangeEvent } from "react";
import { convertFileToBase64 } from "common/utils/convertFileToBase64";

type AddCoverType = {
  setFile: (file: string) => void;
};
export const AddCover: React.FC<AddCoverType> = ({ setFile }) => {
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
    <div>
      <input style={{ display: "none" }} accept={"image/*"} onChange={onChangeCover} id={"download"} type="file" />
      <label htmlFor={"download"}>
        <span id={"download"}>Download </span>
      </label>
    </div>
  );
};
