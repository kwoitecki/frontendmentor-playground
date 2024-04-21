import { FC, useState } from 'react';
import { FAQItemProps } from './model';

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [answerIsVisible, setAnswerIsVisible] = useState(false);
  const icon = answerIsVisible ? './icon-minus.svg' : './icon-plus.svg';

  const handleVisibility = () => {
    setAnswerIsVisible((prevValue) => !prevValue);
  };

  return (
    <div>
      <div className='faqitem'>
        <h2 className='faqitem__header'>
          <a href='#' onClick={handleVisibility}>
            {question}
          </a>
        </h2>
        <div className='faqitem__headericonarea'>
          <a onClick={handleVisibility}>
            <img
              src={icon}
              className='faqitem__headericon'
              alt='show description'
            />
          </a>
        </div>
      </div>

      {answerIsVisible && <p className='faqitem__answer'>{answer}</p>}
    </div>
  );
};

export default FAQItem;
