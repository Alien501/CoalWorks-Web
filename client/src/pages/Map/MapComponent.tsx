import 'mapbox-gl/dist/mapbox-gl.css';
import { useState} from 'react';
import Map, { Marker, MapProps, ViewStateChangeEvent } from 'react-map-gl';

const TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const KUSMUNDA_COORDINATES = {
  latitude: 22.332635,
  longitude: 82.666666
};

const MapComponent: React.FC = () => {
  const [viewPort, setViewPort] = useState<MapProps['initialViewState']>({
    latitude: 22.332635,
    longitude: 82.666666,
    zoom: 10,
    pitch: 75,
    bearing: 0
  });

  // useEffect(() => {
  //   console.log('Mapbox Token:', TOKEN);
  //   console.log('Initial Viewport:', viewPort);
  // }, []);

  const handleViewportChange = (event: ViewStateChangeEvent) => {
    setViewPort(event.viewState);
    console.log('Updated Viewport:', event.viewState);
  };

  return (
    <Map
      initialViewState={viewPort}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/harshiniakshaya/cm06pg3n800ix01pla6jq8tav"
      mapboxAccessToken={TOKEN}
      onMove={handleViewportChange}
    >
      <Marker
        latitude={KUSMUNDA_COORDINATES.latitude}
        longitude={KUSMUNDA_COORDINATES.longitude}
        anchor="bottom"
      >
        <div style={{ color: 'black', fontWeight: 'bold' }}>🪨 Kusmunda Coal Mine</div>
      </Marker>
    </Map>
  );
};

export default MapComponent;
