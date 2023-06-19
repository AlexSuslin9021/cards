import React, { useEffect } from "react";
import s from "./style.module.scss";
import { Button } from "common/component/Button/Button";
import { Question } from "features/Learn/learnComponents/Question";
import { Answer } from "features/Learn/learnComponents/Answer";
import { getCards } from "features/Cards/cards.slice";
import { BackTo } from "common/component/BackTo/BackTo";
import { useLearn } from "features/Learn/hooks/useLearn";

export const Learn = () => {
  const { first, getCard, id, dispatch, setCard, setFirst, cards, card, packName, onNext, edit, onClickShow } =
    useLearn();

  useEffect(() => {
    if (first) {
      if (id) dispatch(getCards({ cardsPack_id: id }));
      setFirst(false);
    }
    if (cards.length > 0) setCard(getCard(cards));
    return () => {
      // console.log("LearnContainer useEffect off");
    };
  }, [dispatch, id, cards, first]);
  return (
    <div>
      <BackTo name={"Back to Cards"} link={card.cardsPack_id ? `/cardsPage/${card.cardsPack_id}` : "/packs/all"} />
      <h2 className={s.header}> {packName}</h2>
      <div className={s.learnContainer}>
        <Question question={card.question} />
        {edit && <Answer answer={card.answer} onNext={onNext} />}
        <div className={s.btn}>{!edit && <Button name={"Show answer"} callback={onClickShow}></Button>}</div>
      </div>
    </div>
  );
};
