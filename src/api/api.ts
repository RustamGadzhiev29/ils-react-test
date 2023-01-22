import { DataType } from "../store/types/types";
import { instance } from "./config";

const coordinatesApi = {
  async getCoordinates(route: DataType) {
    const response = await instance.get(
      `${route.startLatitude},${route.startLongitude};${route.endLatitude},${route.endLongitude}?alternatives=false&steps=false&geometries=geojson&overview=full`
    );
    const points = response.data.routes[0].geometry.coordinates;

    const reversePoints = points.map((arr: DataType[]) => [arr[1], arr[0]]);
    return reversePoints;
  },
};

export type DomainCoordinatesType = [
  startLongitude: number,
  startLatitude: number,
  endLongitude: number,
  endLatitude: number
];

export default coordinatesApi;
