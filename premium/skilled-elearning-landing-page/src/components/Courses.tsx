import courses from '../data/courses.json';
import Course from './Course';

const Courses = () => {
  return (
    <section className='container courses'>
      <h2 className='courses__teaser-title'>
        Checkout our most popular courses!
      </h2>

      {courses.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </section>
  );
};

export default Courses;
