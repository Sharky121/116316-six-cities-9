import MainScreen from '../main-screen/main-screen';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginScreen from '../login-screen/login-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropertyScreen from '../property-screen/property-screen';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import {Offers} from '../../types/offer';
import {Reviews} from '../../types/reviews';

type AppScreenProps = {
  placesCount: number;
  offers: Offers;
  reviews: Reviews;
}

function App({placesCount, offers, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen placesCount = {placesCount} offers = {offers}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<LoginScreen/>}
        />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FavoritesScreen offers = {offers}/>
          </PrivateRoute>
        }
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyScreen reviews = {reviews}/>}
        />
        <Route path="*" element={<NotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
