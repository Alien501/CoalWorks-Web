import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { fetchMines } from '@/utils/fetchMines';
import { fetchSections } from '@/utils/fetchSections';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExpandIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription,DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { fetchAssets } from '@/utils/fetchAssets';
import { MapPin, MapIcon } from 'lucide-react';
import AssetCard from '@/components/custom/assetCard';
import ReactDOMServer from 'react-dom/server';
import SectionCard from '@/components/custom/sectionCard';
import MineCard from '@/components/custom/mineCard';
import StylizedIndustrialNightScene from "@/assets/img/StylizedIndustrialNightScene.jpeg"
import { motion } from "motion/react";
// Mock heat map data for mines in Tamil Nadu
const mockHeatMapData = [
  {
    mineName: 'Kattaparai Mine',
    locationLatitude: 11.1271,
    locationLongitude: 79.3845,
    production: 500000,
    workforce: 250,
    color: '#FF4444'
  },
  {
    mineName: 'Neyveli Lignite Mine',
    locationLatitude: 11.2265,
    locationLongitude: 79.4696,
    production: 750000,
    workforce: 400,
    color: '#FF6666'
  },
  {
    mineName: 'Ariyalur Limestone Mine',
    locationLatitude: 11.1537,
    locationLongitude: 79.1389,
    production: 250000,
    workforce: 150,
    color: '#FF2222'
  }
];

interface Mine {
  mineName: string;
  locationLatitude: number;
  locationLongitude: number;
  color?: string;
  production?: number;
  workforce?: number;
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
  const [mines, setMines] = useState<Mine[]>(mockHeatMapData);
  const [sections, setSections] = useState<Section[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [mode, setMode] = useState('navigation');
  const [isStyleLoaded, setIsStyleLoaded] = useState(false);
  const [heatmapMetric, setHeatmapMetric] = useState('production');
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [selectedItem, setSelectedItem] = useState(null)

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

    const renderDialogContent = () => {
      if (!selectedItem) return null;
    
      if ('coordinates' in selectedItem && Array.isArray(selectedItem.coordinates[0])) {
        // It's a section
        const section = selectedItem as Section;
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span>{section.name}</span>
                <MapIcon size={20} style={{ color: section.color }} />
              </DialogTitle>
              <DialogDescription>
                Details about the selected section.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <img
                src="/placeholder.svg?height=150&width=300"
                alt={`${section.name} section`}
                className="rounded-md object-cover w-full h-[150px]"
              />
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-sm font-medium col-span-1">Type:</span>
                <span className="col-span-3">Section</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-sm font-medium col-span-1">Color:</span>
                <div className="col-span-3 flex items-center">
                  <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: section.color }}></div>
                  <span>{section.color}</span>
                </div>
              </div>
            </div>
          </>
        );
      } else {
        // It's an asset
        const asset = selectedItem as Asset;
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span>{JSON.stringify(asset)}</span>
                <MapPin size={20} color="#FF4444" />
              </DialogTitle>
              <DialogDescription>
                Details about the selected asset.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <img
                src={StylizedIndustrialNightScene}
                // alt={`${asset.name} asset`}
                className="rounded-md object-cover w-full h-[150px]"
              />
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-sm font-medium col-span-1">Type:</span>
                {/* <span className="col-span-3">{asset.type}</span> */}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-sm font-medium col-span-1">Status:</span>
                {/* <span className="col-span-3">{asset.status}</span> */}
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-sm font-medium col-span-1">Coordinates:</span>
                {/* <span className="col-span-3">{asset.coordinates.join(', ')}</span> */}
              </div>
            </div>
          </>
        );
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
        center: [79.3845, 11.1271],
        zoom: 7,
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
              coordinates: [mine.locationLongitude, mine.locationLatitude]
            },
            properties: {
              title: mine.mineName,
              ...(mode === 'heat' && {
                metric: mine[heatmapMetric as keyof Mine] || 0
              })
            }
          }
        });

        if (mode === 'heat') {
          const metric = mine[heatmapMetric as keyof Mine] || 0;
          const maxMetric = Math.max(...mines.map(m => m[heatmapMetric as keyof Mine] || 0));
          const intensity = (metric / maxMetric) * 1;

          mapRef.current?.addLayer({
            id: `point-glow-${index}`,
            type: 'circle',
            source: `point-${index}`,
            paint: {
              'circle-radius': 30 * intensity,
              'circle-color': mode === 'heat'
                ? `rgba(255, 0, 0, ${intensity * 0.7})`
                : (mine.color || '#FF4444'),
              'circle-opacity': intensity * 0.7,
              'circle-blur': 1
            }
          });
        } else {
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
        }

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

        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
          closeOnClick: true
        });

        mapRef.current?.on('click', `point-${index}`, () => {
          setDialogOpen(prev => !prev)
          // popup.setLngLat([mine.locationLongitude, mine.locationLatitude])
          //   .setHTML(ReactDOMServer.renderToString(<MineCard mine={mine} />))
          //   .addTo(mapRef.current!);
        });

        mapRef.current?.on('mouseleave', `point-${index}`, () => {
          popup.remove();
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

        mapRef.current?.on('click', `section-fill-${index}`, () => {
          setSelectedSection(section);
          setDialogOpen(prev => !prev);
        })
      });
    }

    if (mode === 'assets') {
      assets.forEach((asset, index) => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF4444" stroke="#FF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

        const marker = new mapboxgl.Marker(el)
          .setLngLat(asset.coordinates)
          .addTo(mapRef.current!);

        el.addEventListener('click', () => {
          setSelectedItem(asset);
          setDialogOpen(true);
        });
      });
    }

    const allCoordinates = mode === 'assets'
      ? assets.map(asset => asset.coordinates)
      : [
        ...mines.map(mine => [mine.locationLongitude, mine.locationLatitude]),
        ...sections.flatMap(section => section.coordinates)
      ];

    if (allCoordinates.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      allCoordinates.forEach(coord => bounds.extend(coord));
      mapRef.current.fitBounds(bounds, { padding: 50 });
    }
  }, [mines, sections, assets, mode, isStyleLoaded, heatmapMetric]);

  return (
    <>
      <Card className='h-full shadow-none border-0 rounded-sm overflow-hidden'>
        <CardHeader className='flex flex-row justify-between p-1'>
          <div className='flex items-center'>
            <p className='text-balance font-medium'>Overview</p>
          </div>
          <div className='flex space-x-2 items-center'>
            <div>
              <Select defaultValue={mode} onValueChange={(v) => setMode(v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Mode" />
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
                  <Button variant={'secondary'} className='rounded-full w-10 h-10'>
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
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <motion.div layoutId='something'>
          <DialogContent id='something' className="sm:max-w-[425px]">
            {selectedSection && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center justify-between">
                    <span>{selectedSection.name}</span>
                    <MapIcon size={20} style={{ color: selectedSection.color }} />
                  </DialogTitle>
                  <DialogDescription>
                    Details about the selected section.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <img
                    src={StylizedIndustrialNightScene}
                    alt={`${selectedSection.name} section`}
                    className="rounded-md object-cover w-full h-[150px]"
                  />
                  <div className="grid grid-cols-4 items-center gap-4">
                    <span className="text-sm font-medium col-span-1">Type:</span>
                    <span className="col-span-3">Section</span>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <span className="text-sm font-medium col-span-1">Color:</span>
                    <div className="col-span-3 flex items-center">
                      <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: selectedSection.color }}></div>
                      <span>{selectedSection.color}</span>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={() => setDialogOpen(false)}>Close</Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </motion.div>
      </Dialog>
    </>
  );
}


