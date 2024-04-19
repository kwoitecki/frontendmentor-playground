import { FC, useState } from 'react';
import { FAQItemProps } from './model';

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [answerIsVisible, setAnswerIsVisible] = useState(false);
  const icon = answerIsVisible ? '/icon-minus.svg' : '/icon-plus.svg';

  const handleVisibility = () => {
    setAnswerIsVisible((prevValue) => !prevValue);
  };

  return (
    <div>
      <div className='flex items-center gap-6 mt-6'>
        <h2 className='text-c-dark-purple font-c-normal'>{question}</h2>
        <div className='ml-auto'>
          <a onClick={handleVisibility}>
            <img src={icon} className='min-w-[30px] min-h-[30px]' />
          </a>
        </div>
      </div>

      {answerIsVisible && (
        <p className='font-c-light text-c-grayish-purple mt-6 mb-5 text-c-p'>
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
