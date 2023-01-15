import { LatLngExpression } from "leaflet";
import coordinatesApi, { DomainCoordinatesType } from "../api/api";
import { AppRootStateType, TypedDispatch } from "../redux/store";

const initialState: Array<LatLngExpression> = [];

export const routeReducer = (
  state: LatLngExpression[] = initialState,
  action: any,
): LatLngExpression[] => {
  switch (action.type) {
    case "GET_POSITION":
      return action.payload.data;
    default:
      return state;
  }
};

// type
export type routeReducerACtype = ReturnType<typeof GetPositionAC>;

// actions
export const GetPositionAC = (data: Array<LatLngExpression>) => {
  return {
    type: "GET_POSITION",
    payload: {
      data,
    },
  } as const;
};

// thunk

export const fetchCoordinatesTC = (data: DomainCoordinatesType) => {
  return (dispatch: TypedDispatch<AppRootStateType>) => {
    coordinatesApi.getCoordinates(data).then((res) => {
      dispatch(GetPositionAC(res));
    });
  };
};
