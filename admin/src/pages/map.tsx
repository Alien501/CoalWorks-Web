//@ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lock, Unlock, Trash2, Pencil, MousePointer } from "lucide-react";

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

const SECTION_COLORS = {
  large: '#FF4444',
  medium: '#44FF44',
  small: '#4444FF',
  micro: '#FFFF44',
  unit: '#FF44FF'
};

export default function Map({ isEditable, areaName, overAllData, setOverAllData, saveAreaClicked }: { isEditable: boolean, areaName: string }) {
  console.log(JSON.stringify(overAllData))
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const drawRef = useRef(null);
  const [lastCoordinates, setLastCoordinates] = useState()
  const [isLocked, setIsLocked] = useState(false);
  const [currentSection, setCurrentSection] = useState('large');
  const [drawMode, setDrawMode] = useState('simple_select');
  const [viewState, setViewState] = useState({
    center: [82.545748, 22.336312],
    zoom: 12,
    bounds: null
  });


  useEffect(() => {
    if (overAllData?.length > 0) {
      const features = drawRef.current.getAll().features;
      if (features && features.length > 0) {
        const lastCoordinates = features[features.length - 1].geometry.coordinates;
  
        const lastElement = overAllData[overAllData.length - 1];
        if (!lastElement.coordinates || 
            JSON.stringify(lastElement.coordinates) !== JSON.stringify(lastCoordinates)) {
          const updatedOverAllData = [...overAllData];
          updatedOverAllData[updatedOverAllData.length - 1] = {
            ...lastElement,
            coordinates: lastCoordinates,
          };
  
          setOverAllData(updatedOverAllData);
        }
      }
    }
  }, [overAllData]);
  
  

  useEffect(()=> {
    console.log(lastCoordinates)
  }, [lastCoordinates])
  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2FudGhzNyIsImEiOiJjbHp1NzZ2bzEwbTJvMmlzNWt1ZTd5bGRvIn0.p7mHf2jaHG7UZ6Z0y2zpOA';

      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        // style: 'mapbox://styles/mapbox/satellite-v9',
        style: 'mapbox://styles/mapbox/dark-v11 ',
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
            'text-color': SECTION_COLORS[currentSection],
            // 'text-halo-color': '#fff',
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

  const updatePolygonLabels = (features) => {
    if (!mapRef.current) return;

    // Create label points at the center of each polygon
    const labelFeatures = features.map(feature => {
      if (feature.geometry.type !== 'Polygon') return null;

      // Calculate the center of the polygon
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

    // Update the labels source
    const source = mapRef.current.getSource('polygon-labels');
    if (source) {
      source.setData({
        type: 'FeatureCollection',
        features: labelFeatures
      });
    }
  };

  useEffect(() => {
    if (mapRef.current && drawRef.current) {
      const features = drawRef.current ? drawRef.current.getAll() : null;
      updatePolygonLabels(features);
    }
  }, []);

  useEffect(() => {
    if (mapRef.current && mapRef.current.loaded()) {
      const existingFeatures = drawRef.current ? drawRef.current.getAll() : null;

      if (drawRef.current) {
        mapRef.current.removeControl(drawRef.current);
      }

      initializeDraw();

      if (existingFeatures && existingFeatures.features.length > 0) {
        existingFeatures.features = existingFeatures.features.map(feature => ({
          ...feature,
          properties: {
            ...feature.properties,
            sectionType: currentSection,
            color: SECTION_COLORS[currentSection]
          }
        }));

        drawRef.current.add(existingFeatures);
      }
    }
  }, [currentSection, isEditable]);

  function initializeDraw() {
    console.log("initialise draw is called")
    drawRef.current = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: isEditable,
        trash: isEditable
      },
      defaultMode: drawMode,
      styles: getDrawStyles(currentSection),
    });

    mapRef.current.addControl(drawRef.current);

    mapRef.current.on('draw.create', handleDrawCreate);
    mapRef.current.on('draw.update', handleDrawUpdate);
    mapRef.current.on('draw.delete', handleDrawDelete);
    mapRef.current.on('draw.modechange', handleDrawModeChange);
    mapRef.current.on('moveend', handleMoveEnd);
    mapRef.current.on('zoomend', handleZoomEnd);
  }

  function getDrawStyles(sectionType) {
    return [
      {
        id: 'gl-draw-polygon-fill-inactive',
        type: 'fill',
        filter: ['all', ['==', '$type', 'Polygon'], ['!=', 'mode', 'static']],
        paint: {
          'fill-color': SECTION_COLORS[sectionType],
          'fill-outline-color': '#000000',
          'fill-opacity': 0.3,
        },
      },
      {
        id: 'gl-draw-polygon-fill-active',
        type: 'fill',
        filter: ['all', ['==', '$type', 'Polygon'], ['==', 'active', 'true']],
        paint: {
          'fill-color': SECTION_COLORS[sectionType],
          'fill-outline-color': '#000000',
          'fill-opacity': 0.5,
        },
      },
      {
        id: 'gl-draw-polygon-stroke-inactive',
        type: 'line',
        filter: ['all', ['==', '$type', 'Polygon'], ['!=', 'active', 'true']],
        layout: {
          'line-cap': 'round',
          'line-join': 'round',
        },
        paint: {
          'line-color': SECTION_COLORS[sectionType],
          'line-width': 2,
        },
      },
      {
        id: 'gl-draw-polygon-stroke-active',
        type: 'line',
        filter: ['all', ['==', '$type', 'Polygon'], ['==', 'active', 'true']],
        layout: {
          'line-cap': 'round',
          'line-join': 'round',
        },
        paint: {
          'line-color': SECTION_COLORS[sectionType],
          'line-width': 3,
        },
      },
      {
        id: 'gl-draw-polygon-and-line-vertex-active',
        type: 'circle',
        filter: ['all', ['==', 'meta', 'vertex'], ['==', '$type', 'Point']],
        paint: {
          'circle-radius': 6,
          'circle-color': '#fff',
          'circle-stroke-color': SECTION_COLORS[sectionType],
          'circle-stroke-width': 2
        }
      },
      {
        id: 'gl-draw-polygon-and-line-midpoint',
        type: 'circle',
        filter: ['all', ['==', 'meta', 'midpoint'], ['==', '$type', 'Point']],
        paint: {
          'circle-radius': 4,
          'circle-color': SECTION_COLORS[sectionType],
          'circle-stroke-color': '#fff',
          'circle-stroke-width': 1
        }
      }
    ];
  }

  const handleSectionChange = (newSection) => {
    setCurrentSection(newSection);
  };

  function handleDrawCreate(e) {
    const feature = e.features[0];
    feature.properties = {
      sectionType: currentSection,
      color: SECTION_COLORS[currentSection],
      areaName: areaName || 'Unnamed Area'
    };
    console.log(drawRef.current.getAll().features)
    setLastCoordinates(drawRef.current.getAll().features)
    updatePolygonLabels(drawRef.current.getAll().features);
  }

  function handleDrawUpdate(e) {
    const feature = e.features[0];
    feature.properties = {
      sectionType: currentSection,
      color: SECTION_COLORS[currentSection],
      areaName: areaName || 'Unnamed Area'
    };
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
    <div className="relative">
      <div ref={mapContainerRef} className="map-container h-screen w-full" />

      {isEditable &&
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
      }
    </div>
  );
}

{/* <Select value={currentSection} onValueChange={handleSectionChange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select section type" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(SECTION_COLORS).map(([key, color]) => (
                <SelectItem key={key} value={key}>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    {key.charAt(0).toUpperCase() + key.slice(1)} Section
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select> */}