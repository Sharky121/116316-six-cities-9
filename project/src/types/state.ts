import {store} from '../store';
import {AuthorizationStatus} from '../consts';
import {UserData} from './user-data';
import {Offers} from './offer';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user: UserData | null,
};

export type DataProcess = {
  isDataLoaded: boolean,
  offers: Offers,
};

export type AnotherProcess = {
  activeOffer: number | null,
  error: string,
  activeCity: number,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
