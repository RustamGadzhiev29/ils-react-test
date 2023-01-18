import { LatLngExpression } from "leaflet";
import coordinatesApi, { DomainCoordinatesType } from "../api/api";
import { AppRootStateType, TypedDispatch } from "../redux/store";
import { DataType } from "../components/table/Table";

const initialState: RouteDomainType = {
  route: [],
  coordsPosition: null,
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
export type OrderCoordsType = {
  startLongitude: number;
  startLatitude: number;
  endLongitude: number;
  endLatitude: number;
};
export type RouteDomainType = {
  route: LatLngExpression[] | [];
  coordsPosition: OrderCoordsType | null;
  tableCoords: DataType[],
};

export const routeReducer = (
  state: RouteDomainType = initialState,
  action: routeReducerACtype,
): RouteDomainType => {
  switch (action.type) {
    case "GET_ROUTE":
      return { ...state, route: action.payload.data };

    case "GET_POSITION_POINTS":
      return {
        ...state,
        coordsPosition: {
          startLatitude: action.payload.data.startLatitude,
          startLongitude: action.payload.data.startLongitude,
          endLatitude: action.payload.data.endLatitude,
          endLongitude: action.payload.data.endLongitude,
        },
      };
    default:
      return state;
  }
};

// type
export type routeReducerACtype =
  | ReturnType<typeof GetRouteAC>
  | ReturnType<typeof GetPositionPointsAC>;

// actions
export const GetRouteAC = (data: Array<LatLngExpression>) => {
  return {
    type: "GET_ROUTE",
    payload: {
      data,
    },
  } as const;
};
export const GetPositionPointsAC = (data: DataType) => {
  return {
    type: "GET_POSITION_POINTS",
    payload: {
      data,
    },
  } as const;
};
// thunk

export const fetchCoordinatesTC = (data: DataType) => {
  return (dispatch: TypedDispatch<AppRootStateType>) => {
    coordinatesApi.getCoordinates(data).then((res) => {
      dispatch(GetRouteAC(res));
      dispatch(GetPositionPointsAC(data));
    });
  };
};
