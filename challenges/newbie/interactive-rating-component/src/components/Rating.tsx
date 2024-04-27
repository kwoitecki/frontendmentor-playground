import Description from './Description';
import Header from './Header';
import RatingForm from './RatingForm';
import { RatingProps } from './model';

const Rating = ({ onSubmit }: RatingProps) => {
  return (
    <div className='rating'>
      <Header />
      <Description />
      <RatingForm onSubmit={onSubmit} />
    </div>
  );
};

export default Rating;
