import s from "features/Packs/packsComponents/SearchPanel/searchPanel.module.scss";
import React from "react";
import { searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch } from "common/hooks";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "app/store";
import { myIdSelector, user_idSelector } from "features/Packs/packsSelector";

export const Buttons = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const myId = useAppSelector(myIdSelector);
  const userId = useAppSelector(user_idSelector);

  const onClickMyPack = () => {
    dispatch(searchParamsAc({ user_id: myId }));
    navigate("/packs/my");
  };
  const onClickAllPack = () => {
    dispatch(searchParamsAc({ user_id: "" }));
    navigate("/packs/all");
  };

  return (
    <div>
      <button onClick={onClickMyPack} className={myId === userId ? s.myCards : s.allCards}>
        My
      </button>
      <button onClick={onClickAllPack} className={myId !== userId ? s.myCards : s.allCards}>
        All
      </button>
    </div>
  );
};
