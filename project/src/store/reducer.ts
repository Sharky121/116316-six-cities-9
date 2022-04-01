import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, loadOffers, requireAuthorization, setActiveOffer, setError} from './action';
import {AuthorizationStatus} from '../consts';
import {Offers} from '../types/offer';

type InitialState = {
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  activeCity: number,
  activeOffer: number | null,
  offers: Offers,
  error: string,
}

const initialState: InitialState = {
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  activeCity: 1,
  activeOffer: null,
  offers: [],
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    }).addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export default reducer;
