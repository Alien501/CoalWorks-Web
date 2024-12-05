import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { fetchMines } from '@/utils/fetchMines';
import { fetchSections } from '@/utils/fetchSections';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExpandIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { fetchAssets } from '@/utils/fetchAssets';

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

interface Asset {
  name: string;
  coordinates: [number, number];
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
  const [assets, setAssets] = useState<Asset[]>([]);
  const [mode, setMode] = useState('navigation');
  const [isStyleLoaded, setIsStyleLoaded] = useState(false);

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

    const getAssetsData = async () => {
      try {
        const res = await fetchAssets();
        const shapedAssetsData = res.map(asset => ({
          name: asset.name,
          coordinates: [asset.longitude, asset.latitude]
        }));
        setAssets(shapedAssetsData);
      } catch (error) {
        console.error('Failed to fetch assets:', error);
      }
    }

    getMineData();
    getSectionData();
    getAssetsData();
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

      mapRef.current.on('style.load', () => {
        setIsStyleLoaded(true);
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !isStyleLoaded) return;

    mines.forEach((_, index) => {
      if (mapRef.current?.getSource(`point-${index}`)) {
        mapRef.current.removeLayer(`point-glow-${index}`);
        mapRef.current.removeLayer(`point-${index}`);
        mapRef.current.removeSource(`point-${index}`);
      }
    });

    sections.forEach((_, index) => {
      if (mapRef.current?.getSource(`section-${index}`)) {
        mapRef.current.removeLayer(`section-fill-${index}`);
        mapRef.current.removeLayer(`section-outline-${index}`);
        mapRef.current.removeLayer(`section-label-${index}`);
        mapRef.current.removeSource(`section-${index}`);
        mapRef.current.removeSource(`section-label-${index}`);
      }
    });

    assets.forEach((_, index) => {
      if (mapRef.current?.getSource(`asset-${index}`)) {
        mapRef.current.removeLayer(`asset-glow-${index}`);
        mapRef.current.removeLayer(`asset-${index}`);
        mapRef.current.removeSource(`asset-${index}`);
      }
    });
    if (mode === 'navigation' || mode === 'heat') {
      mines.forEach((mine, index) => {
        mapRef.current?.addSource(`point-${index}`, {
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

        mapRef.current?.addLayer({
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

        mapRef.current?.addLayer({
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

        mapRef.current?.on('mouseenter', `point-${index}`, () => {
          new mapboxgl.Popup()
            .setLngLat(mine.coordinates)
            .setHTML(`<h3 class="text-black">${mine.mineName}</h3>`)
            .addTo(mapRef.current!);
        });
      });

      sections.forEach((section, index) => {
        mapRef.current?.addSource(`section-${index}`, {
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
        
        mapRef.current?.addLayer({
          id: `section-fill-${index}`,
          type: 'fill',
          source: `section-${index}`,
          paint: {
            'fill-color': section.color,
            'fill-opacity': 0.3
          }
        });

        mapRef.current?.addLayer({
          id: `section-outline-${index}`,
          type: 'line',
          source: `section-${index}`,
          paint: {
            'line-color': section.color,
            'line-width': 2
          }
        });

        mapRef.current?.addSource(`section-label-${index}`, {
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

        mapRef.current?.addLayer({
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
    }

    if (mode === 'assets') {
      assets.forEach((asset, index) => {
        mapRef.current?.addSource(`asset-${index}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: asset.coordinates
            },
            properties: {
              title: asset.name
            }
          }
        });

        mapRef.current?.addLayer({
          id: `asset-glow-${index}`,
          type: 'circle',
          source: `asset-${index}`,
          paint: {
            'circle-radius': 30,
            'circle-color': '#aeaeae',
            'circle-opacity': 0.5,
            'circle-blur': 1
          }
        });

        mapRef.current?.addLayer({
          id: `asset-${index}`,
          type: 'circle',
          source: `asset-${index}`,
          paint: {
            'circle-radius': 8,
            'circle-color': '#FF4444',
            'circle-stroke-color': 'transparent',
            'circle-stroke-width': 1
          }
        });

        mapRef.current?.on('mouseenter', `asset-${index}`, () => {
          new mapboxgl.Popup()
            .setLngLat(asset.coordinates)
            .setHTML(`<h3 class="text-black">${asset.name}</h3>`)
            .addTo(mapRef.current!);
        });
      });
    }
    
    const allCoordinates = mode === 'assets' 
      ? assets.map(asset => asset.coordinates) 
      : [
          ...mines.map(mine => mine.coordinates),
          ...sections.flatMap(section => section.coordinates)
        ];

    if (allCoordinates.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      allCoordinates.forEach(coord => bounds.extend(coord));
      mapRef.current.fitBounds(bounds, { padding: 50 });
    }
  }, [mines, sections, assets, mode, isStyleLoaded]);

  return (
    <Card className='h-full shadow-none border-0 rounded-sm overflow-hidden'>
      <CardHeader className='flex flex-row justify-between p-1'>
        <div className='flex items-center'>
          <p className='text-balance font-medium'>Overview</p>
        </div>
        <div className='flex space-x-2 items-center'>
          <div>
            <Select defaultValue={mode} onValueChange={(v) => setMode(v)}>
              <SelectTrigger>
                <SelectValue placeholder="Mode"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='navigation'>Navigation</SelectItem>
                <SelectItem value='assets'>Assets</SelectItem>
                <SelectItem value='workers'>Workers</SelectItem>
                <SelectItem value='heat'>Heat Map</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={'secondary'} className='rounded-full h-10 w-10'>
                  <ExpandIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className='h-[90%] max-w-[90%]'>
                <MapPoints />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <CardContent className='p-1 h-full'>
        <div 
          ref={mapContainerRef} 
          className="map-container h-full w-full rounded-e-xl" 
          style={{ minHeight: '400px' }} 
        />
      </CardContent>
    </Card>
  );
}