import s from "features/Packs/SearchPanel/searchPanel.module.scss";
import React, { useState } from "react";
import { searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch } from "common/hooks";
type ButtonsType = {
  name: string;
};
export const Buttons: React.FC<ButtonsType> = ({ name }) => {
  const dispatch = useAppDispatch();
  const [mode, setMode] = useState(false);
  const onClickMyPack = () => {
    setMode(!mode);
    dispatch(searchParamsAc({ user_id: name === "My" ? "64527e000415841fd8df2cf3" : "" }));
  };
  // const onClickAllPack = () => {
  //   setMode(!mode);
  //   dispatch(searchParamsAc({ user_id: "" }));
  // };
  return (
    <>
      <button onClick={onClickMyPack} className={mode ? s.myCards : s.allCards}>
        {name}
      </button>
    </>
  );
};
