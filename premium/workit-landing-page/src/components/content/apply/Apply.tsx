import styles from './apply.module.scss';

const Apply = () => {
  return (
    <article className={styles.apply}>
      <img
        src='image-founder.webp'
        className={`img-clear ${styles.apply__founder}`}
        alt='Apply for access'
      />
      <div
        className={`u-bg-primary-100 u-fc-primary-1000 ${styles.apply__main}`}
      >
        <h2 className='heading heading--medium'>Be the first to test</h2>
        <p className={`content ${styles.apply__description}`}>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <button className='button button--primary'>Apply for access</button>
      </div>
      <div className={styles.apply__background} aria-hidden='true'>
        <img
          className={`img-clear ${styles.apply__background_pattern}`}
          src='bg-pattern-3.svg'
          alt='Background Pattern'
        />
      </div>
    </article>
  );
};

export default Apply;
