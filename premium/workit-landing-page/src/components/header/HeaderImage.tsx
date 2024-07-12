import styles from './headerimage.module.scss';

const HeaderImage = () => (
  <div className='u-bg-primary-950'>
    {/* <article className={`u-curve u-curve--light ${styles.cards}`}></article> */}
    <img
      src='image-hero.webp'
      alt='cellphone image'
      className={`u-img-clear ${styles.headerimage}`}
    />
  </div>
);

export default HeaderImage;
