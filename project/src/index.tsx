import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {cities} from './mocks/city';
import {store} from './store';
import {checkAuthAction, fetchOffersAction} from './store/api-action';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App offers = {offers} reviews={reviews} cities={cities}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
