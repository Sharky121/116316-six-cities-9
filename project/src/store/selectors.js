import {getCity} from '../utils';

export const getCityId = (state) => state.activeCity;

export const getDataLoaded = (state) => state.isDataLoaded;

export const getError = (state) => state.error;

export const getActiveOffer = (state) => state.activeOffer;

export const getCityOffers = (state) => {
  const city = getCity(state.activeCity);
  return state.offers.filter((offer) => offer.city.name === city.title);
};

export const getAuthStatus = (state) => state.authorizationStatus;

export const getUser = (state) => state.user;
