import { RatingFeedbackProps } from './model';

const Feedback = ({ rating }: RatingFeedbackProps) => {
  return (
    <div className='feedback'>
      <img src='./illustration-thank-you.svg' className='feedback__image' />

      <p className='feedback__result'>You selected {rating} out of 5</p>
      <h1 className='feedback__title'>Thank you!</h1>
      <p className='feedback__thankyou'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Feedback;
