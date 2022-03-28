import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {City} from '../types/city';

export const changeCityAction = createAction<City>('selectCity');

export const filterCityAction = createAction<Offer[]>('filterCity');
