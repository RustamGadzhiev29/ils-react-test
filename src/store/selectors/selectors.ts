import { AppRootStateType } from "../store";

export const selectTableCoords = (state: AppRootStateType) =>
  state.position.tableCoords;

export const selectRoute = (state: AppRootStateType) => state.position.route;

export const selectPositionCoords = (state: AppRootStateType) =>
  state.position.positionCoords;
