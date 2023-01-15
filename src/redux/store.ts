import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { routeReducer } from "../features/routeReducer";
import thunk, { ThunkDispatch } from "redux-thunk";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния

const rootReducer = combineReducers({
  position: routeReducer,
});

// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunk));

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>;
export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
// export const useTypedDispatch = () => useDispatch<AppDispatch>();

export const useTypedDispatch = () =>
  useDispatch<TypedDispatch<AppRootStateType>>();

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector; // типизация useSelector

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
