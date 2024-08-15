import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

function Maps() {
  return (
    <MapContainer
      center={[-4.9153154, 119.6000594]}
      zoom={14}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[-4.9153154, 119.6000594]}
        icon={
          new Icon({
            iconUrl: "/icons/marker.png",
            iconSize: [36, 45],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup>A sample marker.</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
