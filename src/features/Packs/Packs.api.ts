import { instance } from "common/api";

export const packsApi = {
  getPack(params: ParamsType) {
    return instance.get<GetPackType>(`/cards/pack/`, { params });
  },
};

export type ParamsType = {
  packName?: string;
  min?: string;
  max?: string;
  sortPacks?: string;
  page?: number;
  pageCount?: number;
  user_id?: string;
  // чьи колоды не обязательно, или придут все
  block?: string;
};
export type GetPackType = {
  cardPacks: CardPacksType[];
  cardPacksTotalCount: number;
  // количество колод
  maxCardsCount: number;
  minCardsCount: number;
  page: number; // выбранная страница
  pageCount: number;
  // количество элементов на странице
};
export type CardPacksType = {
  _id: string;
  user_id: string;
  name: string;
  cardsCount: number;
  created: string;
  updated: string;
};
