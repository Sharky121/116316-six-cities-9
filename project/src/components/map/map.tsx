import {useRef, useState, useEffect, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';

function СitiesMap(): JSX.Element {
  const mapRef: MutableRefObject<null> = useRef(null);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: 52.3909553943508,
          lng: 4.85309666406198,
        },
        zoom: 15,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map]);

  return <div style={{ height: '100%'}} ref={mapRef}></div>;
}

export default СitiesMap;
