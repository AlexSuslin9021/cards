import s from "features/Packs/packsComponents/SearchPanel/searchPanel.module.scss";
import React from "react";
import { searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch } from "common/hooks";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "app/store";
import { maxCardSelector, minCardSelector, myIdSelector, user_idSelector } from "features/Packs/packsSelector";
import { MiniTitle } from "features/Packs/packsComponents/MiniTitle/MiniTitle";
import { isLoggedInSelect } from "app/selectorsApp";

export const MyAllButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const myId = useAppSelector(myIdSelector);
  const userId = useAppSelector(user_idSelector);
  const disabled = useAppSelector(isLoggedInSelect);
  const maxCardsCount = useAppSelector(maxCardSelector);
  const minCardsCount = useAppSelector(minCardSelector);

  const onClickMyPack = () => {
    dispatch(searchParamsAc({ user_id: myId, max: maxCardsCount, min: minCardsCount, page: 1 }));
    navigate("/packs/my");
  };
  const onClickAllPack = () => {
    dispatch(searchParamsAc({ user_id: "", max: maxCardsCount, min: minCardsCount, page: 1 }));
    navigate("/packs/all");
  };

  return (
    <div className={s.choiceCards}>
      <MiniTitle name={" Show packs cards"} />
      <div>
        <button disabled={disabled} onClick={onClickMyPack} className={myId === userId ? s.myCards : s.allCards}>
          My
        </button>
        <button disabled={disabled} onClick={onClickAllPack} className={myId !== userId ? s.myCards : s.allCards}>
          All
        </button>
      </div>
    </div>
  );
};
