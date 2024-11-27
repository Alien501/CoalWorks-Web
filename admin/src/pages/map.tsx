//@ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Button } from "@/components/ui/button";
import { Lock, Unlock, Trash2, Pencil, MousePointer } from "lucide-react";

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

const SECTION_COLORS = {
  1: '#FF4444', // large
  2: '#44FF44', // medium
  3: '#4444FF', // small
  4: '#FFFF44', // micro
  5: '#FF44FF'  // unit
};


export default function Map({
  isEditable,
  areaName,
  overAllData,
  setOverAllData,
  saveAreaClicked,
  sectionName,
  currentAreaData 
}: {
  isEditable: boolean,
  areaName?: string,
  sectionName?: string,
  overAllData?: any[],
  setOverAllData?: (data: any[]) => void,
  saveAreaClicked?: boolean,
  currentAreaData?: {
    areaName: string, 
    areaDescription: string, 
    areaSize: number, 
    areaItems: string[], 
    sectionType: string
  }
}) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const drawRef = useRef(null);
  const [isLocked, setIsLocked] = useState(false);
  const [drawMode, setDrawMode] = useState('simple_select');
  const [viewState, setViewState] = useState({
    center: [82.545748, 22.336312],
    zoom: 12,
    bounds: null
  });

  function getAreaType() {
    switch (sectionName) {
      case 'section1': return 1;
      case 'section2': return 2;
      case 'section3': return 3;
      case 'section4': return 4;
      case 'section5': return 5;
      default: return 1;
    }
  }

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2FudGhzNyIsImEiOiJjbHp1NzZ2bzEwbTJvMmlzNWt1ZTd5bGRvIn0.p7mHf2jaHG7UZ6Z0y2zpOA';

      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: viewState.center,
        zoom: viewState.zoom,
      });

      mapRef.current.on('load', () => {
        mapRef.current.addLayer({
          id: 'polygon-labels',
          type: 'symbol',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: []
            }
          },
          layout: {
            'text-field': ['get', 'areaName'],
            'text-size': 16,
            'text-anchor': 'center',
            'text-justify': 'center'
          },
          paint: {
            'text-color': '#000000',
            'text-halo-width': 1
          }
        });

        initializeDraw();
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
    console.log('herex  ')
  }, [saveAreaClicked])

  function initializeDraw() {
    console.log('Before initialisation')
    console.log(drawRef.current)
    drawRef.current = new MapboxDraw({
      userProperties: true,
      displayControlsDefault: false,
      controls: {
        polygon: isEditable,
        trash: isEditable
      },
      defaultMode: drawMode,
      styles: [
        {
          id: 'gl-draw-polygon-fill-inactive',
          type: 'fill',
          filter: [
            'all',
            ['==', 'active', 'false'],
            ['==', '$type', 'Polygon'],
            ['!=', 'mode', 'static'],
            ['!=', '$meta', 'feature']
          ],
          paint: {
            'fill-color': [
              'step',
              ['number', ['get', 'user_section_type']], // Ensure it's a number
              '#fff',  // default color
              1, '#FF4444',
              2, '#44FF44',
              3, '#4444FF',
              4, '#FFFF44',
              5, '#FF44FF'
            ],
            'fill-outline-color': '#000000',
            'fill-opacity': 0.3,
          },
        },
        {
          id: 'gl-draw-polygon-fill-active',
          type: 'fill',
          filter: ['all', ['==', '$type', 'Polygon'], ['==', 'active', 'true']],
          paint: {
            'fill-color': [
              'step',
              ['get', 'user_section_type'],
              '#fff',  // default color
              1, '#FF4444',
              2, '#44FF44',
              3, '#4444FF',
              4, '#FFFF44',
              5, '#FF44FF'
            ],
            'fill-outline-color': '#000000',
            'fill-opacity': 0.5,
          },
        }
      ],
    });
    console.log('After initialisation')
    // console.log(drawRef.current.setFeatureProperty({hi:''}))
    mapRef.current.addControl(drawRef.current); 

    mapRef.current.on('draw.create', handleDrawCreate);
    mapRef.current.on('draw.update', handleDrawUpdate);
    mapRef.current.on('draw.delete', handleDrawDelete);
    mapRef.current.on('draw.modechange', handleDrawModeChange);
    mapRef.current.on('moveend', handleMoveEnd);
    mapRef.current.on('zoomend', handleZoomEnd);
  }

  function updatePolygonLabels(features) {
    if (!mapRef.current) return;

    const labelFeatures = features.map(feature => {
      if (feature.geometry.type !== 'Polygon') return null;

      const coordinates = feature.geometry.coordinates[0];
      const bounds = coordinates.reduce((bounds, coord) => {
        return [
          [Math.min(bounds[0][0], coord[0]), Math.min(bounds[0][1], coord[1])],
          [Math.max(bounds[1][0], coord[0]), Math.max(bounds[1][1], coord[1])]
        ];
      }, [[coordinates[0][0], coordinates[0][1]], [coordinates[0][0], coordinates[0][1]]]);

      const center = [
        (bounds[0][0] + bounds[1][0]) / 2,
        (bounds[0][1] + bounds[1][1]) / 2
      ];

      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: center
        },
        properties: {
          areaName: feature.properties.areaName || areaName || 'Unnamed Area'
        }
      };
    }).filter(Boolean);

    const source = mapRef.current.getSource('polygon-labels');
    if (source) {
      source.setData({
        type: 'FeatureCollection',
        features: labelFeatures
      });
    }
  }

  function handleDrawCreate(e) {
    const feature = e.features[0];
    const sectionType = getAreaType();
    
    feature.properties = {
      ...feature.properties,
      'section_type': Number(sectionType),
      'areaName': areaName || 'Unnamed Area'
    };

    // Update the overAllData with the new feature's coordinates
    if (currentAreaData) {
      const updatedOverAllData = overAllData.map(area => {
        if (area.areaName === currentAreaData.areaName) {
          return {
            ...area,
            coordinates: feature.geometry
          };
        }
        return area;
      });
      
      setOverAllData(updatedOverAllData);
    }

    updatePolygonLabels(drawRef.current.getAll().features);
  }
  
  function handleDrawUpdate(e) {
    const feature = e.features[0];
    const sectionType = getAreaType();
    
    feature.properties = {
      ...feature.properties,
      'section_type': Number(sectionType),
      'areaName': areaName || 'Unnamed Area'
    };

    // Update the overAllData with the updated feature's coordinates
    if (currentAreaData) {
      const updatedOverAllData = overAllData.map(area => {
        if (area.areaName === currentAreaData.areaName) {
          return {
            ...area,
            coordinates: feature.geometry
          };
        }
        return area;
      });
      
      setOverAllData(updatedOverAllData);
    }

    updatePolygonLabels(drawRef.current.getAll().features);
  }

  function handleDrawDelete() {
    updatePolygonLabels(drawRef.current.getAll().features);
  }

  function handleDrawModeChange(e) {
    setDrawMode(e.mode);
  }

  function handleMoveEnd() {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      setViewState(prev => ({
        ...prev,
        center: [center.lng, center.lat]
      }));
    }
  }

  function handleZoomEnd() {
    if (mapRef.current) {
      setViewState(prev => ({
        ...prev,
        zoom: mapRef.current.getZoom()
      }));
    }
  }

  function handleLock() {
    setIsLocked(!isLocked);
  }

  function deleteAllFeatures() {
    if (drawRef.current) {
      drawRef.current.deleteAll();
    }
  }

  function toggleDrawMode() {
    if (drawRef.current) {
      const newMode = drawMode === 'draw_polygon' ? 'simple_select' : 'draw_polygon';
      drawRef.current.changeMode(newMode);
      setDrawMode(newMode);
    }
  }

  useEffect(() => {
    if (mapRef.current) {
      if (isLocked) {
        const bounds = mapRef.current.getBounds();
        mapRef.current.setMinZoom(mapRef.current.getZoom());
        mapRef.current.setMaxBounds(bounds);
      } else {
        mapRef.current.setMinZoom(null);
        mapRef.current.setMaxBounds(null);
      }
    }
  }, [isLocked]);

  return (
    <div className="relative h-full">
      <div ref={mapContainerRef} className="map-container h-full rounded-sm w-full" />

      {isEditable && (
        <>
          <div className="absolute top-4 left-4 space-y-2">
            <div className="bg-white p-2 rounded-lg shadow-lg space-y-2">
              <Button
                onClick={toggleDrawMode}
                variant="outline"
                className="w-full"
              >
                {drawMode === 'draw_polygon' ? (
                  <><Pencil className="mr-2 h-4 w-4" />Drawing Mode</>
                ) : (
                  <><MousePointer className="mr-2 h-4 w-4" />Select Mode</>
                )}
              </Button>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 space-x-2">
            <Button
              onClick={handleLock}
              variant={isLocked ? "destructive" : "default"}
              className="shadow-lg"
            >
              {isLocked ? <Unlock className="mr-2 h-4 w-4" /> : <Lock className="mr-2 h-4 w-4" />}
              {isLocked ? 'Unlock View' : 'Lock View'}
            </Button>

            <Button
              onClick={deleteAllFeatures}
              variant="destructive"
              className="shadow-lg"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete All
            </Button>
          </div>
        </>
      )}
    </div>
  );
}