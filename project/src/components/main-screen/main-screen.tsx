import {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks';
import PlaceCardLists from '../place-card-list/place-card-list';
import Header from '../header/header';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import {Cities} from '../../types/city';
import {filterCityAction} from '../../store/action';
import {getCity} from '../../utils';
import {getActiveOffer, getCityId, getCityOffers} from '../../store/selectors';

type MainScreenProps = {
  cities: Cities,
}

function MainScreen({cities}: MainScreenProps): JSX.Element {

  const activeCityId = useAppSelector(getCityId);
  const cityOffers = useAppSelector(getCityOffers);
  const activeOffer = useAppSelector(getActiveOffer);

  const dispatch = useAppDispatch();

  const city = getCity(activeCityId);

  useEffect(() => {
    dispatch(filterCityAction());
  },[activeCityId]);

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {city.title}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex ={0}>Popular</li>
                  <li className="places__option" tabIndex= {0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardLists offers={cityOffers} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={cityOffers} activeOffer={activeOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
