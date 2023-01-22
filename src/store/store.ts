import { AnyAction, combineReducers } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { routeReducer } from "./slice/routeSlice";
import { ThunkDispatch } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { routeSagaWatcher } from "./saga/saga";

const SagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  position: routeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(SagaMiddleware),
});

SagaMiddleware.run(routeSagaWatcher);

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
export const useTypedDispatch = () =>
  useDispatch<TypedDispatch<AppRootStateType>>();

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector;

// @ts-ignore
window.store = store;
