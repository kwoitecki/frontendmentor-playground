import { FormEvent, useState } from 'react';
import { RatingProps } from './model';

const RatingForm = ({ onSubmit }: RatingProps) => {
  const [selection, setSelection] = useState(0);

  const buttons = Array.from({ length: 5 }, (_, i) => (
    <button
      key={i}
      type='button'
      value={i + 1}
      className={`btn--grey ${
        selection === i + 1 ? 'btn--grey__selected' : ''
      }`}
      onClick={() => setSelection(i + 1)}
    >
      {i + 1}
    </button>
  ));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSubmit(selection);
  };

  return (
    <form className='rating__form' onSubmit={handleSubmit}>
      <div className='rating__buttons'>{buttons}</div>

      <div className='rating__submit'>
        <button type='submit' className='btn--orange'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default RatingForm;
