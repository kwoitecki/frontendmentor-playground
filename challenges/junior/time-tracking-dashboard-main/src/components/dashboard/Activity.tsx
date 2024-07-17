import { FC } from 'react';
import { ActivityProps, Timeframe } from './dashboard.d';

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
    <div className={`u_card`}>
      <h3>{title}</h3>
      <p>{value.current}</p>
      <p>{value.previous}</p>
    </div>
  );
};

export default Activity;
