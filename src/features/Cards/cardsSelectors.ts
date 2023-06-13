import { RootState } from "app/store";

export const cardsSelector = (state: RootState) => state.cards.cardList.cards;
export const cardsTotalCountSelector = (state: RootState) => state.cards.cardList.cardsTotalCount;
export const maxGradeSelector = (state: RootState) => state.cards.cardList.maxGrade;
export const minGradeSelector = (state: RootState) => state.cards.cardList.minGrade;
export const pageSelector = (state: RootState) => state.cards.cardList.page;
export const pageCountSelector = (state: RootState) => state.cards.cardList.pageCount;
export const packUserIdSelector = (state: RootState) => state.cards.cardList.packUserId;
export const cardAnswerSelector = (state: RootState) => state.cards.queryParams.cardAnswer;
export const cardQuestionSelector = (state: RootState) => state.cards.queryParams.cardQuestion;
export const cardsPack_idSelector = (state: RootState) => state.cards.queryParams.cardsPack_id;
export const minSelector = (state: RootState) => state.cards.queryParams.min;
export const maxSelector = (state: RootState) => state.cards.queryParams.max;
export const sortCardsSelector = (state: RootState) => state.cards.queryParams.sortCards;
export const pageQuerySelector = (state: RootState) => state.cards.queryParams.page;
export const pageCountQuerySelector = (state: RootState) => state.cards.queryParams.pageCount;
export const packNameSelect = (state: RootState) => state.cards.cardList.packName;
export const packDeckCoverSelector = (state: RootState) => state.cards.cardList.packDeckCover;
//
