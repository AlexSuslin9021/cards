import { createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";
import {
  AddPackType,
  CardPacksType,
  GetPackType,
  PackResponseType,
  packsApi,
  ParamsType,
  UpdateType,
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
    // builder.addCase(updatePackTC.fulfilled, (state, action) => {
    //   state.packList.cardPacks.map((p) => (p._id === action.payload._id ? { ...p, name: action.payload.name } : p));
    // });
    // builder.addCase(removePackTC.fulfilled, (state, action) => {
    //   const index=state.packList.cardPacks.findIndex(c=>c._id===action.payload)
    //   if(index!==-1) state.packList.cardPacks.splice(index,1)
    // });
  },
});
export const getPacksTC = createAppAsyncThunk<GetPackType, ParamsType>("//", async (arg: ParamsType) => {
  let res = await packsApi.getPack(arg);
  return res.data;
});
export const addPacksTC = createAppAsyncThunk<CardPacksType, PackResponseType<AddPackType>>(
  "add/packs",
  async (arg: PackResponseType<AddPackType>) => {
    let res = await packsApi.addPack(arg);
    return res.data;
  }
);
export const removePackTC = createAppAsyncThunk<{}, string>("delete/packs", async (arg: string) => {
  await packsApi.deletePack(arg);
  // return res.data;
});
export const updatePackTC = createAppAsyncThunk<CardPacksType, PackResponseType<UpdateType>>(
  "update/packs",
  async (arg: PackResponseType<UpdateType>) => {
    let res = await packsApi.updatePack(arg);
    return res.data;
  }
);

export const packsReducers = slice.reducer;
export const packsThunks = { getPacksTC, addPacksTC, removePackTC, updatePackTC };

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
