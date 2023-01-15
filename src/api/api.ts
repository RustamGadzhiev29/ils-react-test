import axios from "axios";

const BASE_URL = "http://router.project-osrm.org/route/v1/driving/";
const instance = axios.create({
  baseURL: BASE_URL,
});

const coordinatesApi = {
  async getCoordinates(route: DomainCoordinatesType) {
    const response = await instance.get(
      `${route.endLatitude},${route.startLongitude};${route.endLatitude},${route.endLongitude}?alternatives=false&steps=false&geometries=geojson&overview=full`
    );
    const points = response.data.routes[0].geometry.coordinates;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reversePoints = points.map((arr: any[]) => [arr[1], arr[0]]);
    return reversePoints;
  },
};

export type DomainCoordinatesType = {
  key: React.Key;
  orderNumber: string;
  startLongitude: number;
  startLatitude: number;
  endLongitude: number;
  endLatitude: number;
};

export default coordinatesApi;
