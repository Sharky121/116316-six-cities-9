import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {APIRoute, TIMEOUT_SHOW_ERROR} from '../consts';
import {Offers} from '../types/offer';
import {loadOffers, setError} from './action';
import {errorHandle} from '../services/error-handle';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
