import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook, useDispatch } from "react-redux";

// https://redux.js.org/usage/usage-with-typescript#define-typed-hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
