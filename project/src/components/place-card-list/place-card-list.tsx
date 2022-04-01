import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';

type PlaceCardListProps = {
  offers: Offers,
};

function PlaceCardList({offers}: PlaceCardListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCard key = {offer.id} offer={offer}/>
      ))}
    </>
  );
}

export default PlaceCardList;
