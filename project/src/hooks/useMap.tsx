import 'leaflet/dist/leaflet.css';
import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import {MapSettings} from '../consts';
import {City} from '../types/city';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && !map) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      const layer = new TileLayer(MapSettings.UrlTemplate,{attribution: MapSettings.Attribution});

      instance.addLayer(layer);

      setMap(instance);
    }

  }, [mapRef, map, city]);

  return map;
}

export default useMap;
