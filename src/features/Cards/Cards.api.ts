import { instance } from "common/api";

export const apiCards = {
  getCards(params: GetCardsParamsType) {
    return instance.get<any>(`cards/card?cardsPack_id=${params.cardsPack_id}`);
  },
  addCard(params: AddCardType) {
    debugger;
    return instance.post<CardsType>(`/cards/card`, params);
  },
  deleteCard(params: string) {
    return instance.delete<{}>(`/cards/card?id=${params}`);
  },
  updateCard(params: { card: CardsType }) {
    return instance.put<AddCardType>("/cards/card", params);
  },
};
export type AddCardType = {
  card: CardType;
};
export type CardType = {
  cardsPack_id?: string;
  question?: string;
  answer?: string;
  grade?: number;
  shots?: number;
  answerImg?: string;
  questionImg?: string;
  questionVideo?: string;
  answerVideo?: string;
};

export type GetCardsParamsType = {
  cardAnswer?: string;
  cardQuestion?: string;
  cardsPack_id?: string;
  min?: number;
  max?: number;
  sortCards?: string;
  page?: number;
  pageCount?: number;
};

export type CardsType = {
  answer: string;
  question?: string;
  cardsPack_id: string;
  grade?: number;
  shots?: number;
  user_id?: string;
  created?: string;
  updated?: string;
  _id: string;
};
export type CardsResponseType = {
  cards: CardsType[];
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
};
