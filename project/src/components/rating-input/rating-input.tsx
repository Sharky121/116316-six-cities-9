import {ChangeEvent} from 'react';

type RatingInputProps = {
  element: string[];
  fieldChangeHandler: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

function RatingInput({element, fieldChangeHandler}: RatingInputProps): JSX.Element {
  const [title, value] = element;

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={fieldChangeHandler}/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default RatingInput;
