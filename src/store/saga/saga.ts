import { call, put, takeEvery } from "redux-saga/effects";
import { GetRoute, action } from "../slice/routeSlice";
import coordinatesApi from "../../api/api";
import { LatLngExpression } from "leaflet";
import { PayloadAction } from "@reduxjs/toolkit";
import { DataType } from "../types/types";

function* getRouteSagaWork(sagaAction: PayloadAction<{ data: DataType }>) {
  try {
    const route: LatLngExpression[] = yield call(() =>
      coordinatesApi.getCoordinates(sagaAction.payload.data)
    );
    yield put(GetRoute({ data: route }));
  } catch (error) {
    console.log(error);
  }
}

export function* routeSagaWatcher() {
  yield takeEvery(action, getRouteSagaWork);
}
