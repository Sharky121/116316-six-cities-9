import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts';
import {AnotherProcess} from '../../types/state';

const initialState: AnotherProcess = {
  activeOffer: null,
  error: '',
  activeCity: 1,
};

export const anotherProcess = createSlice({
  name: NameSpace.another,
  initialState,
  reducers: {
    setActiveOffer: (state, action) => {
      state.activeOffer = action.payload;
    },
    changeCityAction: (state, action) => {
      state.activeCity = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setActiveOffer, changeCityAction, setError} = anotherProcess.actions;
