import { LatLngExpression } from "leaflet";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataType, RouteDomainType } from "../types/types";

const initialState: RouteDomainType = {
  route: [],
  positionCoords: null,
  tableCoords: [
    {
      key: 1,
      orderNumber: "№1",
      startLongitude: 59.84660399,
      startLatitude: 30.29496392,
      endLongitude: 59.82934196,
      endLatitude: 30.42423701,
    },
    {
      key: 2,
      orderNumber: "№2",
      startLongitude: 59.82934196,
      startLatitude: 30.42423701,
      endLongitude: 59.82761295,
      endLatitude: 30.41705607,
    },
    {
      key: 3,
      orderNumber: "№3",
      startLongitude: 59.83567701,
      startLatitude: 30.38064206,
      endLongitude: 59.84660399,
      endLatitude: 30.29496392,
    },
    {
      key: 4,
      orderNumber: "№4",
      startLongitude: 59.84660399,
      startLatitude: 30.29496392,
      endLongitude: 59.82761295,
      endLatitude: 30.41705607,
    },
    {
      key: 5,
      orderNumber: "№5",
      startLongitude: 59.83567701,
      startLatitude: 30.38064206,
      endLongitude: 59.84660399,
      endLatitude: 30.29496392,
    },
  ],
};

const slice = createSlice({
  name: "route",
  initialState,
  reducers: {
    GetRoute(state, action: PayloadAction<{ data: LatLngExpression[] | [] }>) {
      state.route = action.payload.data;
    },
    GetPositionPoints(state, action: PayloadAction<{ data: DataType | null }>) {
      state.positionCoords = action.payload.data;
    },
  },
});

export const routeReducer = slice.reducer;
export const { GetRoute, GetPositionPoints } = slice.actions;
export const action = GetPositionPoints.type;
