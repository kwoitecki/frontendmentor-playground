import { FC } from 'react';
import { Timeframe, UserProps } from './dashboard.d';
import styles from './userInfo.module.scss';

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
    <div className={`u_card ${styles.userinfo}`}>
      <div className={styles.userinfo__header}>
        <img
          src={image}
          alt={`image of ${name}`}
          className={`img_reset ${styles.userinfo__image}`}
        />
        <p className={styles.userinfo__caption}>Report for</p>
        <h2 className={styles.userinfo__name}>{name}</h2>
      </div>
      <nav>
        <ul className={styles.userinfo__navigation} role='list'>
          {Object.values(Timeframe).map((timeframe) => (
            <li key={timeframe}>
              <button
                value={timeframe}
                onClick={handleOnClick}
                className={styles.userinfo__navitem}
              >
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
