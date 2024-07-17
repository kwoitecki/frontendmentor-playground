import { FC } from 'react';
import { Timeframe, UserProps } from './dashboard.d';

type UserInfoProps = UserProps & {
  changeTimeframe: (timeframe: Timeframe) => void;
};

const UserInfo: FC<UserInfoProps> = ({ name, image, changeTimeframe }) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value as Timeframe;
    changeTimeframe(value as Timeframe);
  };

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={`image of ${name}`} />
      <nav>
        <ul>
          {Object.values(Timeframe).map((timeframe) => (
            <li key={timeframe}>
              <button value={timeframe} onClick={handleOnClick}>
                {timeframe}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default UserInfo;
