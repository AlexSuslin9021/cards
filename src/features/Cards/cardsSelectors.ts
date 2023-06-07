import { RootState } from "app/store";

const cardsSelector = (state: RootState) => state.cards.cardList.cards;
export const cardsTotalCountSelector = (state: RootState) => state.cards.cardList.cardsTotalCount;
const maxGradeSelector = (state: RootState) => state.cards.cardList.maxGrade;
const minGradeSelector = (state: RootState) => state.cards.cardList.minGrade;
const pageSelector = (state: RootState) => state.cards.cardList.page;
const pageCountSelector = (state: RootState) => state.cards.cardList.pageCount;
const packUserIdSelector = (state: RootState) => state.cards.cardList.packUserId;
const cardAnswerSelector = (state: RootState) => state.cards.queryParams.cardAnswer;
const cardQuestionSelector = (state: RootState) => state.cards.queryParams.cardQuestion;
const cardsPack_idSelector = (state: RootState) => state.cards.queryParams.cardsPack_id;
const minSelector = (state: RootState) => state.cards.queryParams.min;
const maxSelector = (state: RootState) => state.cards.queryParams.max;
const sortCardsSelector = (state: RootState) => state.cards.queryParams.sortCards;
const pageQuerySelector = (state: RootState) => state.cards.queryParams.page;
const pageCountQuerySelector = (state: RootState) => state.cards.queryParams.pageCount;
const packNameSelect = (state: RootState) => state.cards.cardList.packName;
const packDeckCoverSelector = (state: RootState) => state.cards.cardList.packDeckCover;
//
export {
  cardsSelector,
  packDeckCoverSelector,
  maxGradeSelector,
  minGradeSelector,
  pageSelector,
  pageCountSelector,
  packUserIdSelector,
  cardAnswerSelector,
  cardQuestionSelector,
  cardsPack_idSelector,
  minSelector,
  maxSelector,
  sortCardsSelector,
  pageQuerySelector,
  pageCountQuerySelector,
  packNameSelect,
};
