import React from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {Offer} from '../../types/offer';
import {RateStars} from '../../consts';
import {setActiveOffer} from '../../store/another-process/another-process';

type PlaceCardProps = {
  offer: Offer,
}

function PlaceCard({offer}: PlaceCardProps): JSX.Element {
  const {id, title, rating, type, isPremium, isFavorite, price, previewImage} = offer;

  const dispatch = useAppDispatch();

  const rateWidth = (RateStars.MAX_WIDTH * Math.round(rating)) / RateStars.MAX_RATE_STARS;

  return (
    <article className="cities__place-card place-card" onMouseOver={() => dispatch(setActiveOffer(id))} onMouseLeave= {() => dispatch(setActiveOffer(null))}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active': ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rateWidth}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
