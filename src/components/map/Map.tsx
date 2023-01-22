import React from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Markers } from "../markers/Markers";
import styles from "./Map.module.scss";
import { useAppSelector } from "../../store/store";
import {
  selectPositionCoords,
  selectRoute,
} from "../../store/selectors/selectors";

const Map: React.FC = () => {
  const positionCoords = useAppSelector(selectPositionCoords);
  const route = useAppSelector(selectRoute);

  return (
    <MapContainer
      className={styles.mapContainer}
      center={[59.9342802, 30.3350986]}
      zoom={12}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positionCoords && <Markers coords={positionCoords} />}
      <Polyline
        pathOptions={{ color: "#6ab0e9", weight: 5 }}
        positions={route}
      />
    </MapContainer>
  );
};

export default Map;
