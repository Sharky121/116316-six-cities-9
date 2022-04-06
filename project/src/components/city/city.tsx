import {useAppDispatch, useAppSelector} from '../../hooks';
import {City} from '../../types/city';
import {getCityId} from '../../store/selectors';
import {changeCityAction} from '../../store/another-process/another-process';

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
