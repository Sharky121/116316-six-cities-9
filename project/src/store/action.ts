import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../types/offer';
import {AuthorizationStatus} from '../consts';

enum Actions  {
  REQUIRE_AUTH = 'user/requireAuthorization',
  LOAD_OFFERS = 'data/loadOffers',
  SELECT_CITY = 'selectCity',
  FILTER_CITY = 'filterCity',
  ACTIVE_OFFER = 'activeOffer',
  SET_ERROR = 'data/setError',
}

export const setActiveOffer = createAction<number | null>(Actions.ACTIVE_OFFER);

export const changeCityAction = createAction<number>(Actions.SELECT_CITY);

export const filterCityAction = createAction(Actions.FILTER_CITY);

export const loadOffers = createAction<Offers>(Actions.LOAD_OFFERS);

export const setError = createAction<string>(Actions.SET_ERROR);

export const requireAuthorization = createAction<AuthorizationStatus>(Actions.REQUIRE_AUTH);
