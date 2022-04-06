import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../consts';

enum Actions {
  REDIRECT_TO_ROUTE = 'redirectToRoute',
}

export const redirectToRoute = createAction<AppRoute>(Actions.REDIRECT_TO_ROUTE);
