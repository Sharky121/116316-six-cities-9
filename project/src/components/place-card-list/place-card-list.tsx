import PlaceCard from '../place-card/place-card';
import {Offers, Offer} from '../../types/offer';

type PlaceCardListProps = {
  offers: Offers,
  handlePlaceCardHover: (offer: Offer | null) => void,
};

function PlaceCardList({offers, handlePlaceCardHover}: PlaceCardListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard key = {offer.id} offer={offer} handlePlaceCardHover={handlePlaceCardHover}/>
      ))}
    </>
  );
}

export default PlaceCardList;
