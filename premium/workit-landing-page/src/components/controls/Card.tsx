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
      <h2 className='heading heading--small'>{title}</h2>
      <p className='content'>{description}</p>
    </div>
  );
};

export default Card;
