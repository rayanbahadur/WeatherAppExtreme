import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap, Icon } from 'react-leaflet';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const ChangeView = ({ center }) => {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
};

const Map = ({ weather: { loc_lat, loc_lon } }) => {
  const position = [loc_lat, loc_lon];

  return (
    <MapContainer center={position} zoom={14} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}></Marker>
      <ChangeView center={position} />
    </MapContainer>
  );
};

export default Map;
