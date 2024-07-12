import styles from './navigation.module.scss';

const Navigation = () => (
  <nav className={styles.primary_navigation}>
    <img
      src='logo-light.svg'
      alt='Welcome to the workit'
      className='primary-navigation__image u-img-clear'
    />
    <button className='button button--secondary'>Apply for access</button>
  </nav>
);

export default Navigation;
