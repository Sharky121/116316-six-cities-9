import {City} from '../../types/city';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCityAction} from '../../store/action';

type CityProps = {
  city: City,
}

function CityItem({city}: CityProps): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  return (
    <a className={`locations__item-link tabs__item ${city.title === selectedCity.title ? 'tabs__item--active' : ''}`} href="/" onClick={(evt) => {
      evt.preventDefault();
      dispatch(changeCityAction(city));
    }}
    >
      <span>{city.title}</span>
    </a>
  );
}

export default CityItem;
