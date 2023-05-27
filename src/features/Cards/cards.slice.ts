import {
  AddCardType,
  apiCards,
  CardResponseType,
  CardsType,
  GetCardsParamsType,
  GetCardsResponseType,
} from "features/Cards/Cards.api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";
import { thunkTryCatch } from "common/utils/thunkTryCatch";
import { initializedTC } from "features/auth/auth.slice";

export const initialState: InitialStateType = {
  cardList: {
    cards: [],
    cardsTotalCount: 3,
    maxGrade: 0,
    minGrade: 0,
    page: 7,
    pageCount: 1,
    packUserId: "",
    packName: "",
  },
  queryParams: {
    cardAnswer: "",
    cardQuestion: "",
    cardsPack_id: "",
    min: 0,
    max: 70,
    sortCards: "0grade",
    page: 1,
    pageCount: 5,
  },
};
type InitialStateType = {
  cardList: GetCardsResponseType;
  queryParams: GetCardsParamsType;
};

export const getCards = createAppAsyncThunk<GetCardsResponseType, GetCardsParamsType>(
  "get/cards",
  async (arg: GetCardsParamsType, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const { getState, dispatch } = thunkAPI;
      await dispatch(initializedTC());
      const params = { ...getState().cards.queryParams, ...arg };
      let res = await apiCards.getCards(params);
      return res.data;
    });
  }
);
export const addCard = createAppAsyncThunk<CardResponseType, AddCardType>(
  "add/card",
  async (arg: AddCardType, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const { dispatch } = thunkAPI;
      let res = await apiCards.addCard(arg);
      dispatch(getCards({ cardsPack_id: arg.card.cardsPack_id }));
      return res.data;
    });
  }
);

export const deleteCard = createAppAsyncThunk<CardResponseType, string>(
  "delete/card",
  async (arg: string, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const { dispatch } = thunkAPI;
      let res = await apiCards.deleteCard(arg);
      dispatch(getCards({ cardsPack_id: res.data.cardsPack_id }));
      return res.data;
    });
  }
);

export const updateCard = createAppAsyncThunk<CardResponseType, { card: CardsType }>(
  "update/card",
  async (arg: { card: CardsType }, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const { dispatch } = thunkAPI;
      await apiCards.updateCard(arg);
      dispatch(getCards({ cardsPack_id: arg.card.cardsPack_id }));
    });
  }
);
const slice = createSlice({
  name: "cards",
  initialState: initialState,
  reducers: {
    searchParams: (state, action: PayloadAction<SearchParamsType>) => {
      state.queryParams = { ...state.queryParams, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      state.cardList.cards = action.payload.cards;
      state.cardList.cardsTotalCount = action.payload.cardsTotalCount;
      state.cardList.minGrade = action.payload.minGrade;
      state.cardList.maxGrade = action.payload.maxGrade;
      state.cardList.packUserId = action.payload.packUserId;
      state.cardList.page = action.payload.page;
      state.cardList.pageCount = action.payload.pageCount;
      state.cardList.packName = action.payload.packName;
    });
    builder.addCase(addCard.fulfilled, (state, action) => {
      state.cardList.cards.unshift(action.payload);
    });
  },
});
export const cardsReducers = slice.reducer;
export const cardsSearchParams = slice.actions.searchParams;
export const cardsThunks = { addCard, deleteCard, updateCard };
type SearchParamsType = {
  cardAnswer?: string;
  cardQuestion?: string;
  cardsPack_id?: string;
  min?: number;
  max?: number;
  sortCards?: string;
  page?: number;
  pageCount?: number;
};
