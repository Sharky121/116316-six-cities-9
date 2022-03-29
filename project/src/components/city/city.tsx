import {City} from '../../types/city';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCityAction} from '../../store/action';

type CityProps = {
  city: City,
}

function CityItem({city}: CityProps): JSX.Element {
  const activeCitySelector = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  return (
    <a className={`locations__item-link tabs__item ${city.title === activeCitySelector.title ? 'tabs__item--active' : ''}`} href="/" onClick={(evt) => {
      evt.preventDefault();
      dispatch(changeCityAction(city));
    }}
    >
      <span>{city.title}</span>
    </a>
  );
}

export default CityItem;
