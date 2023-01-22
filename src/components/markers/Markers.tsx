import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import L, { Icon } from "leaflet";
import { DataType } from "../../store/types/types";

type PropsType = {
  coords: DataType;
};

export function Markers({ coords }: PropsType) {
  const map = useMap();

  const bounds = L.latLngBounds([
    [coords.startLongitude, coords.startLatitude],
    [coords.endLongitude, coords.endLatitude],
  ]);

  useEffect(() => {
    map.fitBounds(bounds);
  }, [coords]);

  return (
    <>
      <Marker
        position={[coords.startLongitude, coords.startLatitude]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>from</Popup>
      </Marker>
      <Marker
        position={[coords.endLongitude, coords.endLatitude]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>here</Popup>
      </Marker>
    </>
  );
}
