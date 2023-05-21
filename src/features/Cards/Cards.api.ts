import { instance } from "common/api";

export const apiCards = {
  getPack(params: GetParamsType) {
    return instance.get<CardsResponseType>(` /cards/card`, { params });
  },
};

type GetParamsType = {
  cardAnswer?: string;
  cardQuestion?: string;
  cardsPack_id?: string;
  min?: string;
  max?: string;
  sortCards?: string;
  grade?: number;
  page?: number;
  pageCount?: number;
};

type CardsType = {
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
type CardsResponseType = {
  cards: CardsType[];
  cardsTotalCount: 3;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
};
