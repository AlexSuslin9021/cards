import { RootState } from "app/store";

export const cardsSelector = (state: RootState) => state.cards.cardList.cards;
export const cardsTotalCountSelector = (state: RootState) => state.cards.cardList.cardsTotalCount;
// const maxGrade = (state: RootState) => state.cards.cardList.maxGrade;
// const minGrade = (state: RootState) => state.cards.cardList.minGrade;
// const page = (state: RootState) => state.cards.cardList.page;
// const pageCount = (state: RootState) => state.cards.cardList.pageCount;
// const packUserId = (state: RootState) => state.cards.cardList.packUserId;
// const cardAnswer = (state: RootState) => state.cards.queryParams.cardAnswer;
// const cardQuestion = (state: RootState) => state.cards.queryParams.cardQuestion;
export const cardsPack_idSelector = (state: RootState) => state.cards.queryParams.cardsPack_id;
// const min = (state: RootState) => state.cards.queryParams.min;
// const max = (state: RootState) => state.cards.queryParams.max;
// const sortCards = (state: RootState) => state.cards.queryParams.sortCards;
// const pageQuery = (state: RootState) => state.cards.queryParams.page;
// const pageCountQuery = (state: RootState) => state.cards.queryParams.pageCount;
//
// export {
//   cardsSelector,
// cardsTotalCount,
// maxGrade,
// minGrade,
// page,
// pageCount,
// packUserId,
// cardAnswer,
// cardQuestion,
// cardsPack_id,
// min,
// max,
// sortCards,
// pageQuery,
// pageCountQuery,
// };
