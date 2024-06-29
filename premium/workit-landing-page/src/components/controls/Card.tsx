import { FC } from 'react';

type CardProps = {
  id: number;
  title: string;
  description: string;
};

const Card: FC<CardProps> = ({ id, title, description }) => {
  return (
    <div className='card'>
      <span>{id}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
