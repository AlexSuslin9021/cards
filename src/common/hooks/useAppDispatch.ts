import { useDispatch } from "react-redux";
import { AppDispatch, store } from "app/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();


