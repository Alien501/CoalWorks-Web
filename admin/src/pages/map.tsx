//@ts-nocheck
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

export default function Map() {
  const mapContainerRef = useRef(null); // Initialize with null
  const mapRef = useRef(null); // Initialize with null
  const drawRef = useRef(null); // Keep a reference for MapboxDraw

  useEffect(() => {
    // Set Mapbox access token
    mapboxgl.accessToken =
      'pk.eyJ1IjoicHJhc2FudGhzNyIsImEiOiJjbHp1NzZ2bzEwbTJvMmlzNWt1ZTd5bGRvIn0.p7mHf2jaHG7UZ6Z0y2zpOA';

    // Initialize the map
    if (!mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [82.545748, 22.336312], // Longitude, Latitude
        zoom: 12,
      });

      // Initialize MapboxDraw and add it to the map
      drawRef.current = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          polygon: true, // Enable polygon drawing
          trash: true, // Enable delete option
        },
        defaultMode: 'draw_polygon',
      });
      mapRef.current.addControl(drawRef.current);

      // Handle Polygon Creation and Update
      mapRef.current.on('draw.create', updateArea);
      mapRef.current.on('draw.update', updateArea);
    }

    return () => {
      // Cleanup on component unmount
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Highlight the Polygon Area
  function updateArea(e) {
    const data = drawRef.current.getAll(); // Get all drawn shapes
    if (data.features.length > 0) {
      const polygon = data.features[0]; // Get the first drawn polygon

      // Add or update the polygon fill layer
      if (mapRef.current.getLayer('polygon-fill')) {
        mapRef.current.getSource('polygon-data').setData(polygon);
      } else {
        mapRef.current.addSource('polygon-data', {
          type: 'geojson',
          data: polygon,
        });

        mapRef.current.addLayer({
          id: 'polygon-fill',
          type: 'fill',
          source: 'polygon-data',
          layout: {},
          paint: {
            'fill-color': '#888888', // Highlight color
            'fill-opacity': 0.5,
          },
        });
      }
    } else {
      // Remove the layer if no polygon is present
      if (mapRef.current.getLayer('polygon-fill')) {
        mapRef.current.removeLayer('polygon-fill');
        mapRef.current.removeSource('polygon-data');
      }
    }
  }

  return (
    <div
      ref={mapContainerRef}
      className="map-container min-h-screen"
    />
  );
}
