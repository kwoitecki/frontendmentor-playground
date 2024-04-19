import { FC } from 'react';
import { FAQListProps } from './model';
import FAQItem from './FAQItem';

const FAQList: FC<FAQListProps> = ({ questions }) => {
  return (
    <div className='mt-6'>
      {questions.map((q, index) => (
        <div
          key={q.id}
          className={
            questions.length - 1 !== index ? 'border-b border-gray-300' : ''
          }
        >
          <FAQItem
            id={q.id}
            key={q.id}
            question={q.question}
            answer={q.answer}
          />
        </div>
      ))}
    </div>
  );
};

export default FAQList;
