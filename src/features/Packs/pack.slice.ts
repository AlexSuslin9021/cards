import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
import { thunkTryCatch } from "common/utils/thunkTryCatch";
import { authApi } from "features/auth/auth.api";
import { RootState } from "app/store";

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
  reducers: {
    searchParams: (state, action: PayloadAction<ParamsType>) => {
      state.queryParams = { ...state.queryParams, ...action.payload };
    },
    deleteSearchParams: (state, action: PayloadAction<ParamsType>) => {
      state.packList.page = 1;
      state.queryParams.packName = "";
      state.queryParams.min = state.packList.minCardsCount;
      state.queryParams.max = state.packList.maxCardsCount;
      state.queryParams.sortPacks = "0updated";
      state.queryParams.pageCount = 10;
      state.packList.maxCardsCount = 0;
      state.packList.minCardsCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPacksTC.fulfilled, (state, action) => {
      state.packList.cardPacks = action.payload.cardPacks;
      state.packList.page = action.payload.page;
      state.packList.cardPacksTotalCount = action.payload.cardPacksTotalCount;
      state.packList.maxCardsCount = action.payload.maxCardsCount;
      state.packList.minCardsCount = action.payload.minCardsCount;
      state.packList.pageCount = action.payload.pageCount;
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
export const getPacksTC = createAppAsyncThunk<GetPackType, ParamsType>(
  "pack/getPack",
  async (arg: ParamsType, thunkAPI) => {
    debugger;
    return thunkTryCatch(thunkAPI, async () => {
      const { getState } = thunkAPI;
      const { pack } = getState() as RootState;
      const params = { ...pack.queryParams, ...arg };
      let res = await packsApi.getPack(params);
      return res.data;
    });
  }
);
export const addPacksTC = createAppAsyncThunk<CardPacksType, PackResponseType<AddPackType>>(
  "add/packs",
  async (arg: PackResponseType<AddPackType>, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      let res = await packsApi.addPack(arg);
      return res.data;
    });
  }
);
export const removePackTC = createAppAsyncThunk<{}, string>("delete/packs", async (arg: string, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await packsApi.deletePack(arg);
  });

  // return res.data;
});
export const updatePackTC = createAppAsyncThunk<CardPacksType, PackResponseType<UpdateType>>(
  "update/packs",
  async (arg: PackResponseType<UpdateType>, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      let res = await packsApi.updatePack(arg);
      return res.data;
    });
  }
);

export const packsReducers = slice.reducer;
export const searchParamsAc = slice.actions.searchParams;
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
