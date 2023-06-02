import { RootState } from "app/store";

export const isLoggedInSelect = (state: RootState) => state.app.isLoggedIn;
