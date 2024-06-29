import { FC } from 'react';

type CardProps = {
  id: number;
  title: string;
  description: string;
};

const Card: FC<CardProps> = ({ id, title, description }) => {
  return (
    <div className='card'>
      <div className='card__caption heading heading--x-small'>{id}</div>
      <h2 className='heading heading--small card__title'>{title}</h2>
      <p className='content card__content u-fc-primary-300'>{description}</p>
    </div>
  );
};

export default Card;
