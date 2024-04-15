import { FC } from 'react';
import { FAQItemProps } from './model';

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default FAQItem;
