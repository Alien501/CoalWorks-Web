import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2FudGhzNyIsImEiOiJjbHp1NzZ2bzEwbTJvMmlzNWt1ZTd5bGRvIn0.p7mHf2jaHG7UZ6Z0y2zpOA';

const MapPolygonDrawer = ({setCoordinate}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [drawnPolygons, setDrawnPolygons] = useState([]);

  useEffect(() => {
    if (map.current) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [lng, lat],
      zoom: zoom
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      }
    });

    map.current.addControl(draw);

    map.current.on('draw.create', updateArea);
    map.current.on('draw.delete', updateArea);
    map.current.on('draw.update', updateArea);

    function updateArea(e) {
      const data = draw.getAll();
      const polygons = data.features.filter(
        feature => feature.geometry.type === 'Polygon'
      );
      
      setDrawnPolygons(polygons);
      setCoordinate(prev => {
        const newPolygon = polygons[polygons.length - 1];
        const newCoordinates = [...prev.coordinates, newPolygon.geometry.coordinates];
        
        return {
          ...prev,
          coordinates: newCoordinates
        };
      });cd
      
      console.log('Drawn Polygons:', polygons);
    }

    return () => map.current.remove();
  }, []);

  return (
    <div className="w-full h-full relative rounded-sm">
      <div 
        ref={mapContainer} 
        className="h-full inset-0" 
      />
    </div>
  );
};

export default MapPolygonDrawer;