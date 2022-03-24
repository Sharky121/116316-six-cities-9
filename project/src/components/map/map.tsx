import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import leaflet from 'leaflet';
import {URL_MARKER_DEFAULT ,URL_MARKER_CURRENT} from '../../consts';
import {Offer, Offers} from '../../types/offer';
import {City} from '../../types/city';

type MapProps = {
  city: City,
  offers: Offers,
  activeOffer: Offer | null,
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
      offers.forEach(({id, location}) => {
        leaflet.marker({
          lat: location.latitude,
          lng: location.longitude,
        }, {
          icon: (activeOffer && activeOffer.id === id)
            ? currentCustomIcon
            : defaultCustomIcon,
        }).addTo(map);
      });
    }
  }, [map, offers, activeOffer]);


  return <div style={{ height: '100%'}} ref={mapRef}></div>;
}

export default Map;
