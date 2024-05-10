import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useState } from "react";

const Map = () => {
  let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow });
  L.Marker.prototype.options.icon = DefaultIcon;

  const [position] = useState([9.015527021285948, 38.786959310258545]); // Default latitude and longitude

  return (
    <MapContainer
      zoom={18}
      center={position}
      scrollWheelZoom={false}
      style={{
        height: "80vh",
        width: "100%",
        zIndex: 0,
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={DefaultIcon}>
        <Popup />
      </Marker>
    </MapContainer>
  );
};

export default Map;
