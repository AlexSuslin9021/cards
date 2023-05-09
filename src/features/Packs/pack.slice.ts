import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";
import {
  AddPackResponseType,
  AddPackType,
  CardPacksType,
  GetPackType,
  packsApi,
  ParamsType,
} from "features/Packs/Packs.api";

const initialState: InitialStateType = {
  packList: {
    minCardsCount: 0,
    maxCardsCount: 0,
    page: 0,
    pageCount: 7,
    cardPacks: [],
    cardPacksTotalCount: 100,
  },
  queryParams: {
    min: 0,
    max: 0,
    packName: "",
    user_id: "",
    block: false,
    page: 0,
    pageCount: 7,
    sortPacks: "0updated",
  },
};

const slice = createSlice({
  name: "pack",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPacksTC.fulfilled, (state, action) => {
      state.packList = action.payload;
      state.packList.page = action.payload.page;
    });
    builder.addCase(addPacksTC.fulfilled, (state, action) => {
      state.packList.cardPacks.unshift(action.payload);
    });
  },
});
export const getPacksTC = createAppAsyncThunk<GetPackType, ParamsType>("//", async (arg: ParamsType) => {
  let res = await packsApi.getPack(arg);
  return res.data;
});
export const addPacksTC = createAppAsyncThunk<CardPacksType, AddPackResponseType>(
  "add/packs",
  async (arg: AddPackResponseType) => {
    let res = await packsApi.addPack(arg);
    return res.data;
  }
);

export const packsReducers = slice.reducer;
export const packsThunks = { getPacksTC, addPacksTC };

//types
type InitialStateType = {
  packList: GetPackType;
  queryParams: ParamsType;
};
type QueryParams = {
  min?: number;
  max?: number;
  packName?: string;
  user_id?: string;
  block?: boolean;
  page?: number;
  pageCount?: number;
  sortPacks?: string;
};

// type PackListType = {
//   cardPacks:[]
//   cardPacksTotalCount: number;
//   // количество колод
//   maxCardsCount: number;
//   minCardsCount: number;
//   page: number; // выбранная страница
//   pageCount: number;
// };
