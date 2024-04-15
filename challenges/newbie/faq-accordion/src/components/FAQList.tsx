import { FC } from 'react';
import { FAQListProps } from './model';
import FAQItem from './FAQItem';

const FAQList: FC<FAQListProps> = ({ questions }) => {
  return (
    <div>
      {questions.map((q) => (
        <FAQItem key={q.question} question={q.question} answer={q.answer} />
      ))}
    </div>
  );
};

export default FAQList;
