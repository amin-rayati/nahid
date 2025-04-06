"use client";
import React, { useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const Map = () => {
  const position = [35.6892, 51.389]; // مختصات تهران

  const customIcon = new Icon({
    iconUrl: "/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "200px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customIcon}>
        <Popup>موقعیت شما</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
