import CityItem from '../city/city';
import {Cities} from '../../types/city';

type CitiesListProps = {
  cities: Cities,
}

function CitiesList({cities}: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map((city, id) => {
          const key = `city-${id}`;
          return (
            <li key={key} className="locations__item">
              <CityItem city={city}/>
            </li>
          );
        })
      }
    </ul>
  );
}

export default CitiesList;
