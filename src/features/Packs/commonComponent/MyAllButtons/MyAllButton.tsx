import s from "features/Packs/SearchPanel/searchPanel.module.scss";
import React from "react";
import { searchParamsAc } from "features/Packs/pack.slice";
import { useAppDispatch } from "common/hooks";
import { useNavigate, useParams } from "react-router-dom";
type ButtonsType = {
  name: string;
};
export const Buttons: React.FC<ButtonsType> = ({ name }) => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const onClickMyPack = () => {
    dispatch(searchParamsAc({ user_id: name === "my" ? "64527e000415841fd8df2cf3" : "" }));
    navigate(`/packs/${name}`);
  };

  return (
    <>
      <button onClick={onClickMyPack} className={params.section === "my" ? s.myCards : s.allCards}>
        {name}
      </button>
    </>
  );
};
