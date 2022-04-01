import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCityAction} from '../../store/action';
import {getCityId} from '../../store/selectors';
import {City} from '../../types/city';

type CityProps = {
  city: City,
}

function CityItem({city}: CityProps): JSX.Element {
  const activeCitySelector = useAppSelector(getCityId);
  const dispatch = useAppDispatch();

  return (
    <a className={`locations__item-link tabs__item ${city.id === activeCitySelector ? 'tabs__item--active' : ''}`} href="/" onClick={(evt) => {
      evt.preventDefault();
      dispatch(changeCityAction(city.id));
    }}
    >
      <span>{city.title}</span>
    </a>
  );
}

export default CityItem;
