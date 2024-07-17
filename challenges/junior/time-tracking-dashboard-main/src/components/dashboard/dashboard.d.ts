interface IUser extends IUserInfo {
  id: number;
  name: string;
  image: string;
  activities: ActivityProps[];
}

interface IActivity {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  }
}

type UserProps = Partial<IUser>;
type ActivityProps = Partial<IActivity>;

export enum Timeframe {
  daily = 'Daily',
  weekly = 'Weekly',
  monthly = 'Monthly',
}