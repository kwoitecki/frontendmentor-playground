import { FC } from 'react';
import { FAQListProps } from './model';
import FAQItem from './FAQItem';

const FAQList: FC<FAQListProps> = ({ questions }) => {
  return (
    <div className='mt-6'>
      {questions.map((q) => (
        <FAQItem id={q.id} key={q.id} question={q.question} answer={q.answer} />
      ))}
    </div>
  );
};

export default FAQList;
