import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2FudGhzNyIsImEiOiJjbHp1NzZ2bzEwbTJvMmlzNWt1ZTd5bGRvIn0.p7mHf2jaHG7UZ6Z0y2zpOA';

const MapPointDrawer = ({setCoordinate}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);

  useEffect(() => {
    if (map.current) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [-70.9, 42.35],
      zoom: 9
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    map.current.on('click', (e) => {
      if (marker.current) {
        marker.current.remove();
      }

      marker.current = new mapboxgl.Marker({color: 'red', scale: 1.5})
        .setLngLat(e.lngLat)
        .addTo(map.current);

      setCoordinate(prev => ({
        ...prev,
        longitude: e.lngLat.lng,
        latitude: e.lngLat.lat
      }));

      console.log('Marker Coordinates:', e.lngLat);
    });

    return () => {
      if (map.current) map.current.remove();
    };
  }, []);

  return (
    <div className="w-full h-full bg-red-200/0 relative rounded-sm">
      <div 
        ref={mapContainer} 
        className="absolute h-full w-full  top-0 bottom-0 left-0 right-0" 
      />
    </div>
  );
};

export default MapPointDrawer;