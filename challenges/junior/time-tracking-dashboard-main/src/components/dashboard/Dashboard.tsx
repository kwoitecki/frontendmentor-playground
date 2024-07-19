import { useEffect, useState } from 'react';
import UserInfo from './UserInfo';
import userdata from './db/user.json';
import { Timeframe, UserProps } from './dashboard.d';
import styles from './dashboard.module.scss';
import Activity from './Activity';

const Dashboard = () => {
  const [user, setUser] = useState<UserProps>();
  const [currentTimeframe, setCurrentTimeframe] = useState<Timeframe>(
    Timeframe.weekly
  );

  useEffect(() => {
    console.log('loading user data...');
    setUser(userdata);
  }, []);

  const timeframeChanged = (timeframe: Timeframe) => {
    console.log(`changing timeframe to ${timeframe}`);
    setCurrentTimeframe(timeframe);
  };

  return (
    <article className={styles.dashboard}>
      <UserInfo
        {...user}
        changeTimeframe={timeframeChanged}
        currentTimeframe={currentTimeframe}
      />

      {user?.activities?.map((activity) => (
        <Activity
          key={activity.title}
          {...activity}
          currentTimeframe={currentTimeframe}
        />
      ))}
    </article>
  );
};

export default Dashboard;
