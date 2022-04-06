import {getCity} from '../utils';
import {State} from '../types/state';

export const getCityId = ({ANOTHER}: State) => ANOTHER.activeCity;

export const getDataLoaded = ({DATA}: State) => DATA.isDataLoaded;

export const getError = ({ANOTHER}: State) => ANOTHER.error;

export const getActiveOffer = ({ANOTHER}: State) => ANOTHER.activeOffer;

export const getCityOffers = ({DATA, ANOTHER}: State) => {
  const city = getCity(ANOTHER.activeCity);
  return DATA.offers.filter((offer) => offer.city.name === city.title);
};

export const getAuthStatus = ({USER}: State) => USER.authorizationStatus;

export const getUser = ({USER}: State) => USER.user;
