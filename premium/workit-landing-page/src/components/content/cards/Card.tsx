import { FC } from 'react';
import styles from './card.module.scss';

const Card: FC<CardProps> = ({ id, title, description }) => (
  <div className={styles.card}>
    <span className='heading heading--x-small'>{id}</span>
    <h2 className='heading heading--small'>{title}</h2>
    <p className='content u-fc-primary-300'>{description}</p>
  </div>
);

export default Card;
