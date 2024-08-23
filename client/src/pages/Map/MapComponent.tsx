import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
mapboxgl.accessToken = MAPBOX_TOKEN;

const KUSMUNDA_COORDINATES = [82.666666, 22.332635];

const MapComponent = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: 'map-container',
        style: 'mapbox://styles/harshiniakshaya/cm06pg3n800ix01pla6jq8tav',
        center: KUSMUNDA_COORDINATES,
        zoom: 10,
        pitch: 75,
        bearing: 0
      });

      mapInstance.on('load', () => {
        new mapboxgl.Marker()
          .setLngLat(KUSMUNDA_COORDINATES)
          .setPopup(new mapboxgl.Popup().setHTML("<h3>Kusmunda Coal Mine</h3>"))
          .addTo(mapInstance);
        mapInstance.addControl(new mapboxgl.NavigationControl(), 'top-right');
        setMap(mapInstance);
      });

      return () => mapInstance.remove();
    };

    if (!map) initializeMap();
  }, [map]);

  return <div id="map-container" className='rounded-sm' style={{ width: '100%', height: '100%' }} />;
};

export default MapComponent;