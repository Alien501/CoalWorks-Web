import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { fetchMines } from '@/utils/fetchMines';
import { fetchSections } from '@/utils/fetchSections';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExpandIcon, Activity } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { fetchAssets } from "@/utils/fetchAssets";
import { MapPin, MapIcon } from "lucide-react";
import StylizedIndustrialNightScene from "@/assets/img/StylizedIndustrialNightScene.jpeg";
import { motion } from "motion/react";
import { io } from "socket.io-client";
import IoTDataDisplay from '@/components/custom/iotDataDisplay';
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

interface FrequencyBin {
  Hz: number;
  Magnitude: number;
}

interface AxisData {
  RMS: number;
  Peak: number;
  STE: number;
  FrequencyBins: FrequencyBin[];
}

interface BMP280Data {
  Temperature: number;
  Pressure: number;
  Altitude: number;
}

interface IoTData {
  x: AxisData;
  y: AxisData;
  z: AxisData;
  bmp280: BMP280Data;
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
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [selectedItem, setSelectedItem] = useState<Asset | Section | null>(null);
  const [iotData, setIotData] = useState<IoTData | null>(null);
  const [isDataLive, setIsDataLive] = useState(false);

  // Sample data for testing (remove this in production)
  useEffect(() => {
    if (selectedItem && 'coordinates' in selectedItem && !Array.isArray((selectedItem as any).coordinates[0])) {
      // Set sample data when asset is selected for testing
      const sampleData: IoTData = {
        x: {
          RMS: 9.564803,
          Peak: 9.588778,
          STE: 5855.069,
          FrequencyBins: [
            { Hz: 5, Magnitude: 0.12385 },
            { Hz: 10, Magnitude: 32.68782 },
            { Hz: 20, Magnitude: 18.42501 },
            { Hz: 40, Magnitude: 11.08956 }
          ]
        },
        y: {
          RMS: 2.395423,
          Peak: 2.420538,
          STE: 367.2352,
          FrequencyBins: [
            { Hz: 5, Magnitude: 0.05008 },
            { Hz: 10, Magnitude: 8.162321 },
            { Hz: 20, Magnitude: 4.730114 },
            { Hz: 40, Magnitude: 2.788032 }
          ]
        },
        z: {
          RMS: 0.61616,
          Peak: 0.665588,
          STE: 24.29777,
          FrequencyBins: [
            { Hz: 5, Magnitude: 0.19412 },
            { Hz: 10, Magnitude: 2.173414 },
            { Hz: 20, Magnitude: 1.122468 },
            { Hz: 40, Magnitude: 0.849438 }
          ]
        },
        bmp280: {
          Temperature: 25.15,
          Pressure: 1006.038,
          Altitude: 60.21606
        }
      };
      setIotData(sampleData);
    }
  }, [selectedItem]);

  // Socket connection for IoT data
  useEffect(() => {
    const newSocket = io('ws://localhost:8888');

    newSocket.on('iot-update', (data: IoTData) => {
      try {
        console.log('Received IoT data:', data);
        setIotData(data);
        setIsDataLive(true);
        
        // Reset live indicator after 3 seconds
        setTimeout(() => setIsDataLive(false), 3000);
      } catch (error) {
        console.error('Failed to parse IoT data:', error);
      }
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    const getMineData = async () => {
      try {
        const res = await fetchMines();
        const shapedMineData = res.map((mine: any) => ({
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
        const shapedSectionData = res.map((section: any) => ({
          name: section.name,
          coordinates: section.coordinates.map((coord: any) => [coord.longitude, coord.latitude]),
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
        const shapedAssetsData = res.map((asset: any) => ({
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
                metric: (mine as any)[mode === 'heat' ? 'production' : 'workforce'] || 0
              })
            }
          }
        });

        if (mode === 'heat') {
          const metric = (mine as any).production || 0;
          const maxMetric = Math.max(...mines.map(m => (m as any).production || 0));
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
      assets.forEach((asset) => {
        const el = document.createElement('div');
        el.className = 'marker';
        el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FF4444" stroke="#FF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

        new mapboxgl.Marker(el)
          .setLngLat(asset.coordinates)
          .addTo(mapRef.current!);

        el.addEventListener('click', () => {
          setSelectedItem(asset as Asset);
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
      allCoordinates.forEach(coord => {
        if (Array.isArray(coord) && coord.length >= 2) {
          bounds.extend([coord[0], coord[1]]);
        }
      });
      mapRef.current.fitBounds(bounds, { padding: 50 });
    }
  }, [mines, sections, assets, mode, isStyleLoaded]);

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
          <DialogContent id='something' className="sm:max-w-[90vw] max-h-[90vh]">
            {selectedSection ? (
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
            ) : selectedItem && 'coordinates' in selectedItem && !Array.isArray((selectedItem as any).coordinates[0]) ? (
              // Asset dialog with IoT data
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>{(selectedItem as Asset).name}</span>
                      {isDataLive && (
                        <div className="flex items-center gap-1 text-green-500 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          LIVE
                        </div>
                      )}
                    </div>
                    <MapPin size={20} color="#FF4444" />
                  </DialogTitle>
                  <DialogDescription>
                    Real-time IoT sensor data for the selected asset.
                  </DialogDescription>
                </DialogHeader>
                <div className="max-h-[70vh] overflow-y-auto">
                  {iotData ? (
                    <IoTDataDisplay data={iotData} />
                  ) : (
                    <div className="flex items-center justify-center h-64">
                      <div className="text-center">
                        <Activity className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-500">Waiting for IoT data...</p>
                        <p className="text-sm text-gray-400">Data will appear here when available</p>
                      </div>
                    </div>
                  )}
                </div>
                <DialogFooter>
                  <Button onClick={() => setDialogOpen(false)}>Close</Button>
                </DialogFooter>
              </>
            ) : null}
          </DialogContent>
        </motion.div>
      </Dialog>
    </>
  );
}


