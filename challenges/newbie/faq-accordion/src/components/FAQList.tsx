import { FC } from 'react';
import { FAQListProps } from './model';
import FAQItem from './FAQItem';

const FAQList: FC<FAQListProps> = ({ questions }) => {
  return (
    <div className='faqlist'>
      {questions.map((q, index) => (
        <div
          key={q.id}
          className={questions.length - 1 !== index ? 'faqlist--border' : ''}
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
