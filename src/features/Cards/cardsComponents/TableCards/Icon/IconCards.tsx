import React from "react";
import { UpdateModalCard } from "features/Cards/cardsComponents/Modal/ModalUpdateCards";
import { DeleteModalCard } from "features/Cards/cardsComponents/Modal/ModalDeleteCards";

export const IconCards: React.FC<IconCardsType> = ({ _id, answer, question, cardsPack_id }) => {
  return (
    <span>
      {<UpdateModalCard id={_id} answerUpdate={answer} questionUpdate={question} cardsPack_id={cardsPack_id} />}
      {<DeleteModalCard id={_id} name={answer} />}
    </span>
  );
};
type IconCardsType = {
  _id: string;
  answer: string;
  question: string;
  cardsPack_id: string;
};
