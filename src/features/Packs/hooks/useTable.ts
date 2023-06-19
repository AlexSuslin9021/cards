import { useAppDispatch } from "common/hooks";
import { useAppSelector } from "app/store";
import { myIdSelector, packSelector } from "features/Packs/packsSelector";
import { useNavigate } from "react-router-dom";
import { cardsSearchParams } from "features/Cards/cards.slice";

export const useTable = () => {
  const dispatch = useAppDispatch();
  const packs = useAppSelector(packSelector);

  const styleTableHead = { fontFamily: "Montserrat", fontWeight: "700" };
  const styleTableBody = {
    background: "white",
    maxWidth: "20vw",
    wordWrap: "break-word",
  };
  const myId = useAppSelector(myIdSelector);
  const navigate = useNavigate();

  const onClickLearn = (name: string) => {
    navigate(`/learn/${name}`);
  };
  const onClickNamePack = (name: string, countCards: number, userId: string, cardId: string) => {
    console.log(countCards, userId, myId, cardId);
    if (countCards === 0 && userId === myId) navigate(`/page-pack/${name}/${cardId}`);
    if (countCards !== 0) navigate(`/cardsPage/${cardId}`);
    dispatch(cardsSearchParams({ cardsPack_id: cardId, page: 1, sortCards: "" }));
  };

  return { packs, styleTableHead, styleTableBody, onClickNamePack, myId, onClickLearn };
};
