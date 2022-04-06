import {createSlice} from '@reduxjs/toolkit';
import {DataProcess} from '../../types/state';
import {NameSpace} from '../../consts';

const initialState: DataProcess = {
  isDataLoaded: false,
  offers: [],
};

export const dataProcess = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const {loadOffers} = dataProcess.actions;
