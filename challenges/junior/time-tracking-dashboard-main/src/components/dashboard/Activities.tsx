import { FC } from 'react';
import Activity from './Activity';
import { Timeframe, UserProps } from './dashboard.d';

type ActivitiesProps = UserProps & {
  currentTimeframe: Timeframe;
};

const Activities: FC<ActivitiesProps> = ({ activities, currentTimeframe }) => {
  return (
    <div>
      {activities?.map((activity) => (
        <Activity
          key={activity.title}
          {...activity}
          currentTimeframe={currentTimeframe}
        />
      ))}
    </div>
  );
};

export default Activities;
