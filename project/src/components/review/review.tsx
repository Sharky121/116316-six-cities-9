import {RateStars} from '../../consts';
import {Review} from '../../types/reviews';

type ReviewProps = {
  review: Review;
}

function ReviewItem({review}: ReviewProps): JSX.Element {
  const {comment, user, rating} = review;
  const {name, avatarUrl} = user;

  const rateWidth = (RateStars.MAX_WIDTH * Math.round(rating)) / RateStars.MAX_RATE_STARS;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rateWidth}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
}

export default ReviewItem;
