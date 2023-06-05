import React from "react";
import teach from "common/image/teacher.svg";
import { UpdatePackModal } from "features/Packs/packsComponents/Modal/UpdatePackModal";
import { DeletePackModal } from "features/Packs/packsComponents/Modal/DeletePackModal";
import { useTable } from "features/Packs/hooks/useTable";

export const Icon: React.FC<IconType> = ({ user_id, cardsCount, deckCover, name, _id }) => {
  const { myId, onClickLearn } = useTable();

  return (
    <span>
      <img
        onClick={() => onClickLearn(name)}
        style={{
          marginRight: "10px",
          cursor: "pointer",
          display: cardsCount === 0 ? "none" : "inline",
        }}
        src={teach}
        alt="teach"
      />
      {user_id === myId && <UpdatePackModal deckCover={deckCover} name={name} src={deckCover} id={_id} />}
      {user_id === myId && <DeletePackModal id={_id} name={name} />}
    </span>
  );
};

type IconType = {
  user_id: string;
  cardsCount: number;
  deckCover: string | null;
  name: string;
  _id: string;
};
