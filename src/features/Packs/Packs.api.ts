import { instance } from "common/api";

export const packsApi = {
  getPack(params: ParamsType) {
    return instance.get<GetPackType>(`/cards/pack/`, { params });
  },
  addPack(arg: { cardsPack: AddPackType }) {
    return instance.post(`/cards/pack/`, arg);
  },
  updatePack(arg: { cardsPack: UpdateType }) {
    return instance.put(`/cards/pack/`, arg);
  },
  deletePack(id: string) {
    return instance.put(`/cards/pack/`, { id });
  },
};

export type AddPackType = {
  name: string;
  deckCover?: string;
  private?: boolean;
};
export type UpdateType = {
  _id: string;
  name?: string;
};
export type ParamsType = {
  packName?: string;
  min?: string;
  max?: string;
  sortPacks?: string;
  page?: number;
  pageCount?: number;
  user_id?: string;
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
