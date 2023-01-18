import React from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// import { COORDINATS_URL } from "../../shared/constants";
import { useAppSelector } from "../../redux/store";
import { Markers } from "./Markers";

const Map = () => {
  const route = useAppSelector((data) => data.position.route);
  const coords = useAppSelector((data) => data.position.coordsPosition);
  console.log(route);

  return (
    <div>
      <MapContainer center={[59.9342802, 30.3350986]} zoom={14} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        order.fromLat, order.fromIng
        {coords && <Markers coords={coords} />}
        <Polyline pathOptions={{ color: "red" }} positions={route} />
      </MapContainer>
    </div>
  );
};

export default Map;
