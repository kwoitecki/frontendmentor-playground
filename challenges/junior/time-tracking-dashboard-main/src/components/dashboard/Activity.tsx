import { FC } from 'react';
import { ActivityProps, Timeframe } from './dashboard.d';
import styles from './activity.module.scss';

type ActivityCardProps = ActivityProps & {
  currentTimeframe: Timeframe;
};

type TimeframeProps = {
  current: number;
  previous: number;
};

const Activity: FC<ActivityCardProps> = ({
  title,
  timeframes,
  currentTimeframe,
}) => {
  let value: Partial<TimeframeProps> = {
    current: 0,
    previous: 0,
  };

  if (timeframes && currentTimeframe) {
    switch (currentTimeframe) {
      case Timeframe.daily:
        value = timeframes.daily;
        break;
      case Timeframe.monthly:
        value = timeframes.monthly;
        break;
      default:
        value = timeframes.weekly;
    }
  }

  return (
    <div data-type={title} className={styles.activity}>
      <div className={styles.activity__content}>
        <h3 className={styles.activity__title}>{title}</h3>
        <img
          className={`img_reset ${styles.activity__image}`}
          src='icon-ellipsis.svg'
          alt=''
        />
        <p className={styles.activity__current}>{value.current}hrs</p>
        <p className={styles.activity__previous}>
          Last Week - {value.previous}hrs
        </p>
      </div>
    </div>
  );
};

export default Activity;
