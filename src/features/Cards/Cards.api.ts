import { instance } from "common/api";

export const apiCards = {
  getCards(params: GetCardsParamsType) {
    return instance.get<GetCardsResponseType>(`cards/card`, { params });
  },
  addCard(params: AddCardType) {
    return instance.post<CardResponseType>(`/cards/card`, params);
  },
  deleteCard(params: string) {
    return instance.delete<CardResponseType>(`/cards/card?id=${params}`);
  },
  updateCard(params: { card: CardsType }) {
    return instance.put<CardResponseType>("/cards/card", params);
  },
};
export type AddCardType = {
  card: CardType;
};

export type CardType = {
  cardsPack_id: string;
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
  cardsPack_id: string;
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

export type CardResponseType = {
  answer: string;
  question: string;
  cardsPack_id: string;
  grade: number;
  shots: number;
  user_id: string;
  created: string;
  updated: string;
  _id: string;
};
export type GetCardsResponseType = {
  cards: CardResponseType[];
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
  packName: string;
};
