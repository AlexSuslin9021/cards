import { useAppSelector } from "app/store";
import { cardsPack_idSelector, cardsSelector, cardsTotalCountSelector } from "features/Cards/cardsSelectors";

export const useCards = () => {
  const cards = useAppSelector(cardsSelector);
  const cardsTotalCount = useAppSelector(cardsTotalCountSelector);
  const cardsPack_id = useAppSelector(cardsPack_idSelector);
  return { cards, cardsTotalCount, cardsPack_id };
};
