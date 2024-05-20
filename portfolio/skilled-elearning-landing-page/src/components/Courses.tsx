import courses from '../data/courses.json';
import Course from './Course';

const Courses = () => {
  return (
    <section className='container courses'>
      <div className='courses__teaser'>
        <h2 className='courses__teaser__title'>
          Checkout our most popular courses!
        </h2>
      </div>

      {courses.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </section>
  );
};

export default Courses;
