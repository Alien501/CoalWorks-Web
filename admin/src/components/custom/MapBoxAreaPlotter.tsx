import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Button } from "@/components/ui/button"

mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2FudGhzNyIsImEiOiJjbHp1NzZ2bzEwbTJvMmlzNWt1ZTd5bGRvIn0.p7mHf2jaHG7UZ6Z0y2zpOA'

interface MapboxAreaPlotterProps {
  onSaveCoordinates: (coordinates: number[][]) => void
  initialCoordinates?: number[][]
}

interface Feature {
  type: 'Feature'
  geometry: {
    type: 'Polygon'
    coordinates: number[][][]
  }
}

interface FeatureCollection {
  features: Feature[]
}

export function MapboxAreaPlotter({ onSaveCoordinates, initialCoordinates }: MapboxAreaPlotterProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const draw = useRef<MapboxDraw | null>(null)
  const [lng] = useState(-70.9)
  const [lat] = useState(42.35)
  const [zoom] = useState(9)

  useEffect(() => {
    if (map.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })

    map.current.on('load', () => {
      draw.current = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          polygon: true,
          trash: true
        }
      })
      map.current!.addControl(draw.current)

      if (initialCoordinates && initialCoordinates.length > 0) {
        draw.current.add({
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [initialCoordinates]
          }
        })
      }
    })
  }, [lng, lat, zoom, initialCoordinates])

  const handleSave = () => {
    const data = draw.current!.getAll() as FeatureCollection
    if (data.features.length > 0) {
      const coordinates = data.features[0].geometry.coordinates[0]
      onSaveCoordinates(coordinates)
    }
  }

  return (
    <div>
      <div ref={mapContainer} className="h-96 w-full" />
      <Button onClick={handleSave} className="mt-4">Save Area</Button>
    </div>
  )
}