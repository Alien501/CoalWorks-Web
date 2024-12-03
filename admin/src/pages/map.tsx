import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapPoints() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  const points = [
    {
      coordinates: [82.545748, 22.336312],
      color: '#FF4444',
      name: 'Red Point'
    },
    {
      coordinates: [82.555748, 22.346312],
      color: '#44FF44',
      name: 'Green Point'
    },
    {
      coordinates: [82.535748, 22.326312],
      color: '#4444FF',
      name: 'Blue Point'
    },
    {
      coordinates: [82.565748, 22.316312],
      color: '#FFFF44',
      name: 'Yellow Point'
    }
  ];

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2FudGhzNyIsImEiOiJjbHp1NzZ2bzEwbTJvMmlzNWt1ZTd5bGRvIn0.p7mHf2jaHG7UZ6Z0y2zpOA';

      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [82.545748, 22.336312],
        zoom: 10,
      });

      mapRef.current.on('load', () => {
        points.forEach((point, index) => {
          mapRef.current.addSource(`point-${index}`, {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: point.coordinates
              },
              properties: {
                title: point.name
              }
            }
          });

          mapRef.current.addLayer({
            id: `point-glow-${index}`,
            type: 'circle',
            source: `point-${index}`,
            paint: {
              'circle-radius': 30,
              'circle-color': point.color,
              'circle-opacity': 0.5,
              'circle-blur': 1
            }
          });

          mapRef.current.addLayer({
            id: `point-${index}`,
            type: 'circle',
            source: `point-${index}`,
            paint: {
              'circle-radius': 8,
              'circle-color': point.color,
              'circle-stroke-color': 'transparent',
              'circle-stroke-width': 1
            }
          });

          mapRef.current.on('mouseenter', `point-${index}`, (e) => {
            new mapboxgl.Popup()
              .setLngLat(point.coordinates)
              .setHTML(`<h3>${point.name}</h3>`)
              .addTo(mapRef.current);
          });
        });
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapContainerRef} className="map-container h-full w-full" />
  );
}