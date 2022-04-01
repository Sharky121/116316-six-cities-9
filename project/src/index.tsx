import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {cities} from './mocks/city';
import {store} from './store';
import {fetchOffersAction} from './store/api-action';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App offers = {offers} reviews={reviews} cities={cities}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
