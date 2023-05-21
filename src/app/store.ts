import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { appReducer } from "app/app.slice";
import { authReducers } from "features/auth/auth.slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { packsReducers } from "features/Packs/pack.slice";
import { cardsReducers } from "features/Cards/cards.slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducers,
    pack: packsReducers,
    cards: cardsReducers,
  },
});
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
