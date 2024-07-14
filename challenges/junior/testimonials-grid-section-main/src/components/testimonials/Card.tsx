import { FC } from 'react';

const Card: FC<TestimonialProps> = ({ name, role, image, title, content }) => (
  <div>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <h3>{role}</h3>
    <h4>{title}</h4>
    <p>{content}</p>
  </div>
);

export default Card;
