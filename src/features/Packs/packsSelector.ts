import { RootState } from "app/store";

export const packSelector = (state: RootState) => state.pack.packList.cardPacks;
export const myIdSelector = (state: RootState) => state.auth.profile?._id;
export const isLoggedInSelector = (state: RootState) => state.auth.isLoggedIn;
export const pageSelector = (state: RootState) => state.pack.queryParams.page;
export const maxCardSelector = (state: RootState) => state.pack.packList.maxCardsCount;
export const minCardSelector = (state: RootState) => state.pack.packList.minCardsCount;
export const maxSelector = (state: RootState) => state.pack.queryParams.max;
export const minSelector = (state: RootState) => state.pack.queryParams.min;
export const pageCountSelector = (state: RootState) => state.pack.queryParams.pageCount;
export const user_idSelector = (state: RootState) => state.pack.queryParams.user_id;
export const sortPacksSelector = (state: RootState) => state.pack.queryParams.sortPacks;
export const packNameSelector = (state: RootState) => state.pack.queryParams.packName;
export const pageCurrentSelector = (state: RootState) => state.pack.queryParams.page;
export const cardPacksTotalCountSelector = (state: RootState) => state.pack.packList.cardPacksTotalCount;
