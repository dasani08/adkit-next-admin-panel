'use client';
import React from 'react';
import { Card } from 'antd';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks';

import L from 'leaflet';
import { statesData } from './us-states';

import 'leaflet/dist/leaflet.css';

function getColor(d) {
  return d > 1000
    ? '#800026'
    : d > 500
    ? '#BD0026'
    : d > 200
    ? '#E31A1C'
    : d > 100
    ? '#FC4E2A'
    : d > 50
    ? '#FD8D3C'
    : d > 20
    ? '#FEB24C'
    : d > 10
    ? '#FED976'
    : '#FFEDA0';
}

function style(feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
  };
}

const GeoJsonLayer = () => {
  const map = useMap();

  React.useEffect(() => {
    function highlightFeature(e) {
      var layer = e.target;

      layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7,
      });

      layer.bringToFront();
    }

    function resetHighlight(e) {
      geojson.resetStyle(e.target);
    }

    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
      });
    }

    const geojson = L.geoJson(statesData, { style, onEachFeature }).addTo(map);
  }, [map]);
};

export default function ChoroplethMap() {
  return (
    <Card
      title="SALE ORDERS"
      bodyStyle={{
        height: '400px',
      }}
    >
      <MapContainer
        center={[37.8, -96]}
        zoom={3}
        scrollWheelZoom={false}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJsonLayer />
      </MapContainer>
    </Card>
  );
}
