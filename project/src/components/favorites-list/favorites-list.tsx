import FavoriteCard from '../favorite-card/favorite-card';
import {Offers} from '../../types/offer';

type FavoritesListProps = {
  offers: Offers,
}

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  const cities = [...new Set(offers.map((offer) => offer.city.name))];

  return (
    <ul className="favorites__list">
      {cities.map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers
              .filter((offer) => offer.city.name === city)
              .map((offer) => (
                <FavoriteCard key={offer.id} offer={offer}/>
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
