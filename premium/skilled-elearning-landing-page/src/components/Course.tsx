import { FC } from 'react';
import CustomButton from './ui/CustomButton';

type CourseProps = {
  id: number;
  title: string;
  icon: string;
  description: string;
};

const Course: FC<CourseProps> = ({ id, title, icon, description }) => {
  return (
    <article className='course' key={id}>
      <div className='course__img-wrapper'>
        <img className='course__img' src={icon} alt={title} />
      </div>
      <h3 className='course__title'>{title}</h3>
      <p className='course__description'>{description}</p>

      <div className='course__action'>
        <CustomButton
          mode='no-border'
          onClick={() => console.log(`Enroll in ${title}`)}
        />
      </div>
    </article>
  );
};

export default Course;
