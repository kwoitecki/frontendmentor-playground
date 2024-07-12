import { useEffect, useState } from 'react';
import styles from './cards.module.scss';
import dbData from './cards.json';
import Card from './Card';

const Cards = () => {
  const [data, setData] = useState<CardProps[]>([]);

  useEffect(() => {
    console.log('loading data...');
    setData(dbData);
  }, []);

  return (
    <article className={`u-curve u-curve--light ${styles.cards}`}>
      {data.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </article>
  );
};

export default Cards;
