import {ChangeEvent, useState} from 'react';
import {RatingInputs} from '../../consts';
import RatingInput from '../rating-input/rating-input';

function ReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '0',
    review: '',
  });

  const fieldChangeHandler = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;

    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingInputs).map((element) => <RatingInput key={element[1]} element={element} fieldChangeHandler={fieldChangeHandler}/>)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={fieldChangeHandler}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
