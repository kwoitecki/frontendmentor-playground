import { FC } from 'react';
import { ActivityProps, Timeframe } from './dashboard.d';

type ActivityCardProps = ActivityProps & {
  currentTimeframe: Timeframe;
};

const Activity: FC<ActivityCardProps> = ({
  title,
  timeframes,
  currentTimeframe,
}) => {
  // todo: set data depending on the current timeframe

  return (
    <div>
      <h3>{title}</h3>
      <p>{timeframes?.weekly.current}</p>
      <p>{timeframes?.weekly.previous}</p>
      <p>{currentTimeframe}</p>
    </div>
  );
};

export default Activity;
