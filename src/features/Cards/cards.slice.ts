import { apiCards, CardsResponseType, GetCardsParamsType } from "features/Cards/Cards.api";
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
  },
  queryParams: {
    cardAnswer: "",
    cardQuestion: "",
    cardsPack_id: "",
    min: 0,
    max: 0,
    sortCards: "0grade",
    page: 5,
    pageCount: 1,
  },
};
type InitialStateType = {
  cardList: CardsResponseType;
  queryParams: GetCardsParamsType;
};

export const getCards = createAppAsyncThunk<CardsResponseType, GetCardsParamsType>(
  "add/packs",
  async (arg: GetCardsParamsType, thunkAPI) => {
    return thunkTryCatch(thunkAPI, async () => {
      const { getState, dispatch } = thunkAPI;
      await dispatch(initializedTC());
      const params = { ...getState().cards.queryParams, ...arg };
      let res = await apiCards.getCards(params);
      return { cardList: res.data };
    });
  }
);
const slice = createSlice({
  name: "cards",
  initialState: initialState,
  reducers: {
    searchParams: (state, action: PayloadAction<GetCardsParamsType>) => {
      state.queryParams = { ...state.queryParams, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      if (action.payload) {
        state.cardList.cards = action.payload.cards;
        state.cardList.cardsTotalCount = action.payload.cardsTotalCount;
        state.cardList.minGrade = action.payload.minGrade;
        state.cardList.maxGrade = action.payload.maxGrade;
        state.cardList.packUserId = action.payload.packUserId;
        state.cardList.page = action.payload.page;
        state.cardList.pageCount = action.payload.pageCount;
      }
    });
  },
});
export const cardsReducers = slice.reducer;
