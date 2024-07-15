import { FC } from 'react';
import styles from './card.module.scss';

const Card: FC<TestimonialProps> = ({ name, role, image, title, content }) => (
  <div className={styles.card}>
    <img src={image} alt={name} className={styles.card__image} />
    <p className={styles.card__name}>{name}</p>
    <p className={styles.card__role}>{role}</p>
    <h2 className={styles.card__title}>{title}</h2>
    <q className={styles.card__content}>{content}</q>
  </div>
);

export default Card;
