import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl";
import MapboxDraw from '@mapbox/mapbox-gl-draw';

const NewMap = () => {
    const mapContainerRef = useRef();
    const mapRef = useRef();
    const [viewState, setViewState] = useState({
        center: [82.545748, 22.336312],
        zoom: 12,
        bounds: null
    });

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2FudGhzNyIsImEiOiJjbHp1NzZ2bzEwbTJvMmlzNWt1ZTd5bGRvIn0.p7mHf2jaHG7UZ6Z0y2zpOA'
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: viewState.center,
            zoom: viewState.zoom
        })

        const draw = new MapboxDraw({
            userProperties: true,
            // displayControlsDefault: false,
            controls: {
                polygon: true,
                trash: true
            },
            styles: [
                {
                    'id': 'gl-draw-polygon-fill-inactive',
                    'type': 'fill',
                    'filter': ['all', ['==', 'active', 'false'], ['==', '$type', 'Polygon'], ['!=', 'mode', 'static']],
                    'paint': {
                        'fill-color': [
                            'case', ['==', ['get', 'user_class_id'], 1], '#00ff'
                        ]
                    }
                }
            ]
        })

        mapRef.current.addControl(draw);


    }, [])
    return (
        <div ref={mapContainerRef} className="h-screen w-full overflow-hidden"></div>
    )
}

export default NewMap;