import { useEffect, useState } from 'react';
import dbData from './testimonials.json';
import Card from './Card';
import styles from './testimonials.module.scss';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);

  useEffect(() => {
    console.log('loading data ...');
    setTestimonials(dbData);
  }, []);

  return (
    <article className={styles.testimonials}>
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} {...testimonial} />
      ))}
    </article>
  );
};

export default Testimonials;
