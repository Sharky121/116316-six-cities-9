export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

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

export enum MapSettings {
  UrlTemplate = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
}


