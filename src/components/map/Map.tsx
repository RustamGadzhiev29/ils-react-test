import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { COORDINATS_URL } from "../../shared/constants";
import { useAppSelector } from "../../redux/store";

const Map = () => {
  const route = useAppSelector((data) => data.position);
  console.log(route);

  // const [position, setPosition] = useState([]);

  // useEffect(() => {
  //   fetch(COORDINATS_URL)
  //     .then((res) => res.json())
  //     .then((data) => setPosition(data.routes[0].geometry.coordinates));
  // }, []);

  // const coor = position.map((arr) => [arr[1], arr[0]]);
  // console.log(position);

  return (
    <div>
      <MapContainer
        center={[59.84660399, 30.52423701]}
        zoom={12}
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[59.84660399, 30.29496392]}>
          <Popup>from here</Popup>
        </Marker>
        <Marker position={[59.82934196, 30.42423701]}>
          <Popup>here</Popup>
        </Marker>
        <Polyline pathOptions={{ color: "red" }} positions={route} />
      </MapContainer>
    </div>
  );
};

export default Map;
