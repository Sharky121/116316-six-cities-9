export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const TIMEOUT_SHOW_ERROR = 2000;

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

export const RegExpTemplates = {
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  PASSWORD: /[a-zA-Z]+[0-9]/,
};
export const errorMessages = {
  EMAIL_FORMAT: 'Введите корректный email',
  EMAIL_EMPTY: 'Введите email',
  PASSWORD_CHAR: 'Пароль должен состоять из букв и цифр',
  PASSWORD_LENGTH: 'Пароль должен быть не меньше двух символов',
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

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}
