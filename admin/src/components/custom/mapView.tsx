import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// Replace with your actual Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2FudGhzNyIsImEiOiJjbHp1NzZ2bzEwbTJvMmlzNWt1ZTd5bGRvIn0.p7mHf2jaHG7UZ6Z0y2zpOA'

interface MapViewProps {
  coordinates: number[][]
}

export function MapView({ coordinates }: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (map.current) return // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinates[0],
      zoom: 12
    })

    map.current.on('load', () => {
      if (!map.current) return

      map.current.addSource('area', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [coordinates]
          }
        }
      })

      map.current.addLayer({
        id: 'area-fill',
        type: 'fill',
        source: 'area',
        paint: {
          'fill-color': '#0080ff',
          'fill-opacity': 0.5
        }
      })

      map.current.addLayer({
        id: 'area-outline',
        type: 'line',
        source: 'area',
        paint: {
          'line-color': '#000',
          'line-width': 3
        }
      })
    })
  }, [coordinates])

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />
}
