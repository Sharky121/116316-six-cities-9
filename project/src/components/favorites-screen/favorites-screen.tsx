import Header from '../header/header';
import Footer from '../footer/footer';

import {Offers} from '../../types/offer';
import FavoritesList from '../favorites-list/favorites-list';

type FavoritesScreenProps = {
  offers: Offers,
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
          </section>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default FavoritesScreen;
