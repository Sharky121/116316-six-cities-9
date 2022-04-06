import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';
import { Marker, LayerGroup } from 'leaflet';
import {URL_MARKER_DEFAULT ,URL_MARKER_CURRENT} from '../../consts';
import {Offers} from '../../types/offer';
import {City} from '../../types/city';

type MapProps = {
  city: City,
  offers: Offers,
  activeOffer: number | null,
}

function Map({offers, activeOffer, city}: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      const markers: Marker[] = [];

      offers.forEach(({id, location}) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker.setIcon(activeOffer === id ? currentCustomIcon : defaultCustomIcon);
        markers.push(marker);
      });

      const layerGroup = new LayerGroup(markers);
      layerGroup.addTo(map);

      return () => {
        map?.removeLayer(layerGroup);
      };
    }
  }, [map, offers, activeOffer]);


  return <div style={{ height: '100%'}} ref={mapRef}></div>;
}

export default Map;
