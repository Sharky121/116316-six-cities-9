import {createSlice} from '@reduxjs/toolkit';
import {UserProcess} from '../../types/state';
import {AuthorizationStatus, NameSpace} from '../../consts';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {requireAuthorization, setUser} = userProcess.actions;
