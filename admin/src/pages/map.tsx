//@ts-nocheck
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

export default function Map() {
  const mapContainerRef = useRef(null); 
  const mapRef = useRef(null); 
  const drawRef = useRef(null); 

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoicHJhc2FudGhzNyIsImEiOiJjbHp1NzZ2bzEwbTJvMmlzNWt1ZTd5bGRvIn0.p7mHf2jaHG7UZ6Z0y2zpOA';

    if (!mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [82.545748, 22.336312], 
        zoom: 12,
      });

      drawRef.current = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          polygon: true, 
          trash: true, 
        },
        defaultMode: 'draw_polygon',
      });
      mapRef.current.addControl(drawRef.current);

      mapRef.current.on('draw.create', updateArea);
      mapRef.current.on('draw.update', updateArea);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  function updateArea(e) {
    const data = drawRef.current.getAll(); 
    if (data.features.length > 0) {
      const polygon = data.features[0]; 

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
            'fill-color': '#888888', 
            'fill-opacity': 0.5,
          },
        });
      }
    } else {
      if (mapRef.current.getLayer('polygon-fill')) {
        mapRef.current.removeLayer('polygon-fill');
        mapRef.current.removeSource('polygon-data');
      }
    }
  }

  return (
    <div
      ref={mapContainerRef}
      className="map-container h-full w-full "
    />
  );
}
