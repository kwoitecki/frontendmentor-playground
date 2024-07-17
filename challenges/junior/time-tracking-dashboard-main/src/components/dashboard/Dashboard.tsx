import { useEffect, useState } from 'react';
import Activities from './Activities';
import UserInfo from './UserInfo';
import userdata from './db/user.json';
import { Timeframe, UserProps } from './dashboard.d';

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
    <article>
      <UserInfo {...user} changeTimeframe={timeframeChanged} />
      <Activities {...user} currentTimeframe={currentTimeframe} />
    </article>
  );
};

export default Dashboard;
