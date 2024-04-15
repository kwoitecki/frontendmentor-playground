import { FC } from 'react';
import { FAQItemProps } from './model';

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div>
      <h2 className='text-c-dark-purple font-c-normal'>{question}</h2>
      <p className='font-c-light text-c-grayish-purple mt-6 mb-5 text-c-p'>
        {answer}
      </p>
    </div>
  );
};

export default FAQItem;
