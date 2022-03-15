export const MAX_RATE_STARS = 5;

export const RatingInputs = {
  perfect: '5',
  good: '4',
  notBad: '3',
  badly: '2',
  terribly: '1',
};

export const RateStars = {
  MAX_RATE_STARS: 5,
  MAX_WIDTH: 100,
};

export enum AppRoute {
  SignIn = '/login',
  Favorites  = '/favorites',
  Main = '/',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
