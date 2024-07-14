import { useEffect, useState } from 'react';
import dbData from './testimonials.json';
import Card from './Card';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);

  useEffect(() => {
    console.log('loading data ...');
    setTestimonials(dbData);
  }, []);

  return (
    <article>
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} {...testimonial} />
      ))}
    </article>
  );
};

export default Testimonials;
