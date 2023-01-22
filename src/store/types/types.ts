import { LatLngExpression } from "leaflet";

export type DataType = {
  key: React.Key;
  orderNumber: string;
  startLongitude: number;
  startLatitude: number;
  endLongitude: number;
  endLatitude: number;
};

export type RouteDomainType = {
  route: LatLngExpression[] | [];
  positionCoords: DataType | null;
  tableCoords: DataType[];
};
