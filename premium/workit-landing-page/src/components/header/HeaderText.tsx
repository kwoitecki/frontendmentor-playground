import styles from './headertext.module.scss';

const HeaderText = () => (
  <div className={styles.headertext}>
    <h1 className='heading heading--large u-fc-primary-1000'>
      Data <span className='underline'>tailored</span> to
      <br /> your needs.
    </h1>

    <div className={styles.headertext__actions}>
      <button className='button button--primary'>Learn more</button>
    </div>
  </div>
);

export default HeaderText;
