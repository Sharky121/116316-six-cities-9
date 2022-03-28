import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, filterCityAction} from './action';
import {cities} from '../mocks/city';

const initialState = {
  city: cities[0],
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(filterCityAction, (state, action) => {
      state.offers = [];
      action.payload.forEach((offer) => {
        state.offers.push(offer);
      });
    });
});

export default reducer;
