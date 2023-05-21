import { CardsResponseType, CardsType, GetCardsParamsType } from "features/Cards/Cards.api";

export const initialState: InitialStateType = {
  cardList: {
    cards: [],
    cardsTotalCount: 3,
    maxGrade: 0,
    minGrade: 0,
    page: 7,
    pageCount: 1,
    packUserId: "",
  },
  queryParams: {
    cardAnswer: "",
    cardQuestion: "",
    cardsPack_id: "",
    min: 0,
    max: 0,
    sortCards: "0grade",
    page: 5,
    pageCount: 1,
  },
};
type InitialStateType = {
  cardList: CardsResponseType;
  queryParams: GetCardsParamsType;
};
