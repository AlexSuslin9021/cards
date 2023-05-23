import { RootState } from "app/store";

const packSelector = (state: RootState) => state.pack.packList.cardPacks;
const myIdSelector = (state: RootState) => state.auth.profile?._id;
const isLoggedInSelector = (state: RootState) => state.auth.isLoggedIn;
const pageSelector = (state: RootState) => state.pack.queryParams.page;
const maxSelector = (state: RootState) => state.pack.queryParams.max;
const minSelector = (state: RootState) => state.pack.queryParams.min;
const pageCountSelector = (state: RootState) => state.pack.queryParams.pageCount;
const user_idSelector = (state: RootState) => state.pack.queryParams.user_id;
const sortPacksSelector = (state: RootState) => state.pack.queryParams.sortPacks;
const packNameSelector = (state: RootState) => state.pack.queryParams.packName;
const pageCurrentSelector = (state: RootState) => state.pack.queryParams.page;
const cardPacksTotalCountSelector = (state: RootState) => state.pack.packList.cardPacksTotalCount;
export {
  packSelector,
  myIdSelector,
  pageCurrentSelector,
  isLoggedInSelector,
  pageSelector,
  maxSelector,
  minSelector,
  pageCountSelector,
  user_idSelector,
  sortPacksSelector,
  packNameSelector,
  cardPacksTotalCountSelector,
};
