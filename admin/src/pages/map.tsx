import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { fetchMines } from '@/utils/fetchMines';
import { fetchSections } from '@/utils/fetchSections';

interface Mine {
  mineName: string;
  locationLatitude: number;
  locationLongitude: number;
  color?: string;
}

interface Section {
  name: string;
  coordinates: [number, number][];
  color: string;
}

const calculateCentroid = (coordinates: [number, number][]): [number, number] => {
  const n = coordinates.length;
  let sumLat = 0;
  let sumLon = 0;

  coordinates.forEach(coord => {
    sumLon += coord[0];
    sumLat += coord[1];
  });

  return [sumLon / n, sumLat / n];
}

export default function MapPoints() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [mines, setMines] = useState<Mine[]>([]);
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    const getMineData = async () => {
      try {
        const res = await fetchMines();
        const shapedMineData = res.map(mine => ({
          ...mine,
          coordinates: [mine.locationLongitude, mine.locationLatitude],
          color: '#FF4444'
        }));
        setMines(shapedMineData);
      } catch (error) {
        console.error('Failed to fetch mines:', error);
      }
    };

    const getSectionData = async () => {
      try {
        const res = await fetchSections();
        const shapedSectionData = res.map(section => ({
          name: section.name,
          coordinates: section.coordinates.map(coord => [coord.longitude, coord.latitude]),
          color: section.type.color || '#c01b1b'
        }));
        setSections(shapedSectionData);
      } catch (error) {
        console.error('Failed to fetch sections:', error);
      }
    };

    getMineData();
    getSectionData();
  }, []);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2FudGhzNyIsImEiOiJjbHp1NzZ2bzEwbTJvMmlzNWt1ZTd5bGRvIn0.p7mHf2jaHG7UZ6Z0y2zpOA';

      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [82.545748, 22.336312],
        zoom: 10,
      });
    }

    if (mapRef.current) {
      mapRef.current.on('load', () => {
        // Render Mines
        mines.forEach((mine, index) => {
          if (mapRef.current?.getSource(`point-${index}`)) {
            mapRef.current.removeLayer(`point-glow-${index}`);
            mapRef.current.removeLayer(`point-${index}`);
            mapRef.current.removeSource(`point-${index}`);
          }

          mapRef.current.addSource(`point-${index}`, {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: mine.coordinates
              },
              properties: {
                title: mine.mineName
              }
            }
          });

          mapRef.current.addLayer({
            id: `point-glow-${index}`,
            type: 'circle',
            source: `point-${index}`,
            paint: {
              'circle-radius': 30,
              'circle-color': mine.color || '#FF4444',
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
              'circle-color': mine.color || '#FF4444',
              'circle-stroke-color': 'transparent',
              'circle-stroke-width': 1
            }
          });

          mapRef.current.on('mouseenter', `point-${index}`, () => {
            new mapboxgl.Popup()
              .setLngLat(mine.coordinates)
              .setHTML(`<h3 class="text-black">${mine.mineName}</h3>`)
              .addTo(mapRef.current!);
          });
        });

        sections.forEach((section, index) => {
          if (mapRef.current?.getSource(`section-${index}`)) {
            mapRef.current.removeLayer(`section-fill-${index}`);
            mapRef.current.removeLayer(`section-outline-${index}`);
            mapRef.current.removeSource(`section-${index}`);
          }

          mapRef.current.addSource(`section-${index}`, {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Polygon',
                coordinates: [section.coordinates]
              },
              properties: {
                name: section.name
              }
            }
          });

          const centroid = calculateCentroid(section.coordinates);
          
          mapRef.current.addLayer({
            id: `section-fill-${index}`,
            type: 'fill',
            source: `section-${index}`,
            paint: {
              'fill-color': section.color,
              'fill-opacity': 0.3
            }
          });

          mapRef.current.addLayer({
            id: `section-outline-${index}`,
            type: 'line',
            source: `section-${index}`,
            paint: {
              'line-color': section.color,
              'line-width': 2
            }
          });
          mapRef.current.addSource(`section-label-${index}`, {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: centroid
              },
              properties: {
                name: section.name
              }
            }
          });

          mapRef.current.addLayer({
            id: `section-label-${index}`,
            type: 'symbol',
            source: `section-label-${index}`,
            layout: {
              'text-field': ['get', 'name'],
              'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
              'text-size': 10,
              'text-anchor': 'center',
              'text-max-width': 10
            },
            paint: {
              'text-color': section.color,
              'text-halo-color': 'transparent',
              'text-halo-width': 1
            }
          });
        });
        });

        const allCoordinates = [
          ...mines.map(mine => mine.coordinates),
          ...sections.flatMap(section => section.coordinates)
        ];

        if (allCoordinates.length > 0) {
          const bounds = new mapboxgl.LngLatBounds();
          allCoordinates.forEach(coord => bounds.extend(coord));
          mapRef.current.fitBounds(bounds, { padding: 50 });
        }
      }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [mines, sections]);

  return (
    <div 
      ref={mapContainerRef} 
      className="map-container h-full w-full" 
      style={{ minHeight: '400px' }} 
    />
  );
}