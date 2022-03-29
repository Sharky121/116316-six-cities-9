import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, filterCityAction} from './action';
import {cities} from '../mocks/city';
import {offers} from '../mocks/offers';

const initialState = {
  activeCity: cities[0],
  offers: offers,
  filteredOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(filterCityAction, (state) => {
      state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.activeCity.title);
    });
});

export default reducer;
