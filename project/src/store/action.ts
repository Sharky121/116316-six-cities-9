import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city';

export const changeCityAction = createAction<City>('selectCity');

export const filterCityAction = createAction('filterCity');
