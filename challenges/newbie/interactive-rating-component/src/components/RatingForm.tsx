const RatingForm = () => {
  return (
    <form className='rating__form'>
      <div className='rating__buttons'>
        <button type='button' value='1' className='btn--grey'>
          1
        </button>
        <button type='button' value='2' className='btn--grey'>
          2
        </button>
        <button type='button' value='3' className='btn--grey'>
          3
        </button>
        <button type='button' value='4' className='btn--grey'>
          4
        </button>
        <button type='button' value='5' className='btn--grey'>
          5
        </button>
      </div>

      <div className='rating__submit'>
        <button type='submit' className='btn--orange'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default RatingForm;
