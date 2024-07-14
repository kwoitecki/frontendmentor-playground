import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src='logo-dark.svg' alt='workit logo' className={`u-img-clear`} />
      <ul className={styles.footer__social}>
        <li>
          <img
            src='icon-facebook.svg'
            alt='follow us on facebook'
            className={`u-img-clear ${styles.footer__socialicon}`}
          />
        </li>
        <li>
          <img
            src='icon-twitter.svg'
            alt='follow us on twitter'
            className={`u-img-clear ${styles.footer__socialicon}`}
          />
        </li>
        <li>
          <img
            src='icon-instagram.svg'
            alt='follow us on instagram'
            className={`u-img-clear ${styles.footer__socialicon}`}
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
