import React, { ChangeEvent } from "react";
import { Button } from "common/component/Button/Button";
import { convertFileToBase64 } from "common/utils/convertFileToBase64";
import { updateUserTC } from "features/auth/auth.slice";
import { useAppDispatch } from "common/hooks";

export const AddCover = () => {
  const onChangeCover = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];

      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          // dispatch(updateUserTC({ avatar: file64 }));
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
        {/*<span>helo </span>*/}

        <span id={"download"}>Download </span>
        {/*<Button name={"Download cover for pack"} />*/}
      </label>
    </div>
  );
};
