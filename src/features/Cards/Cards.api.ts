import { instance } from "common/api";

export const apiCards = {
  getCards(params: GetCardsParamsType) {
    return instance.get<GetCardsResponseType>(`cards/card`, { params });
  },
  addCard(params: { card: CardsType }) {
    return instance.post<{ newCard: CardResponseType }>(`/cards/card`, params);
  },
  deleteCard(params: string) {
    return instance.delete<{ deletedCard: CardResponseType }>(`/cards/card?id=${params}`);
  },
  updateCard(params: { card: CardsType }) {
    return instance.put<CardResponseType>("/cards/card", params);
  },
  updateGrade(params: UpdateGradeType) {
    return instance.put<UpdateGradeResponseType>("/cards/grade", params);
  },
};
export type AddCardType = {
  newCard: CardType;
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
  _id?: string;
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

export type UpdateGradeType = {
  grade: number;
  card_id: string;
};
type UpdateGradeResponseType = {
  updatedGrade: {
    _id: string;
    cardsPack_id: string;
    card_id: string;
    user_id: string;
    grade: number;
    shots: number;
  };
};
