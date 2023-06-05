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
import { authApi } from "features/Auth/auth.api";
import { RootState } from "app/store";
import { initializedTC } from "features/Auth/auth.slice";

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
    pageCount: 5,
    sortPacks: "",
  },
};

export const getPacksTC = createAppAsyncThunk<GetPackType, ParamsType>(
  "pack/getPack",
  async (arg: ParamsType, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const { getState, dispatch } = thunkAPI;
      // await dispatch(initializedTC());
      const params = { ...getState().pack.queryParams, ...arg };
      let res = await packsApi.getPack(params);
      return res.data;
    });
  }
);
export const addPacksTC = createAppAsyncThunk<CardPacksType, PackResponseType<AddPackType>>(
  "add/packs",
  async (arg: PackResponseType<AddPackType>, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const { dispatch } = thunkAPI;
      let res = await packsApi.addPack(arg);
      dispatch(getPacksTC({}));
      return res.data;
    });
  }
);
export const removePackTC = createAppAsyncThunk<{}, string>("delete/packs", async (arg: string, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const { dispatch } = thunkAPI;
    await packsApi.deletePack(arg);
    dispatch(getPacksTC({}));
  });
});
export const updatePackTC = createAppAsyncThunk<CardPacksType, PackResponseType<UpdateType>>(
  "update/packs",
  async (arg: PackResponseType<UpdateType>, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const { dispatch } = thunkAPI;
      let res = await packsApi.updatePack(arg);
      dispatch(getPacksTC({}));
      return res.data;
    });
  }
);

const slice = createSlice({
  name: "pack",
  initialState: initialState,
  reducers: {
    searchParams: (state, action: PayloadAction<ParamsType>) => {
      state.queryParams = { ...state.queryParams, ...action.payload };
    },
    deleteSearchParams: (state, action: PayloadAction<ParamsType>) => {
      state.queryParams.page = 1;
      state.queryParams.packName = "";
      state.queryParams.user_id = "";
      state.queryParams.min = state.packList.minCardsCount;
      state.queryParams.max = 78;
      state.queryParams.sortPacks = "";
      state.queryParams.pageCount = 5;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPacksTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.packList.cardPacks = action.payload.cardPacks;
        state.queryParams.page = action.payload.page;
        state.queryParams.pageCount = action.payload.pageCount;
        state.packList.cardPacksTotalCount = action.payload.cardPacksTotalCount;
        state.packList.maxCardsCount = action.payload.maxCardsCount;
        state.packList.minCardsCount = action.payload.minCardsCount;

        // state.queryParams.min = action.payload.minCardsCount;
      }
    });
    builder.addCase(addPacksTC.fulfilled, (state, action) => {
      state.packList.cardPacks.unshift(action.payload);
    });
    builder.addCase(updatePackTC.fulfilled, (state, action) => {
      state.packList.cardPacks = state.packList.cardPacks.map((t) =>
        t._id === action.payload._id ? { ...t, name: action.payload.name, deckCover: action.payload.deckCover } : t
      );
    });

    builder.addCase(removePackTC.fulfilled, (state, action) => {
      const index = state.packList.cardPacks.findIndex((c) => c._id === action.payload);
      if (index !== -1) state.packList.cardPacks.splice(index, 1);
    });
  },
});

export const packsReducers = slice.reducer;
export const searchParamsAc = slice.actions.searchParams;
export const deleteSearchParamsAC = slice.actions.deleteSearchParams;
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
