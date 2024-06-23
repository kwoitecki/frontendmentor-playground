import HeaderDescription from './HeaderDescription';

const HeaderSmall = () => {
  return (
    <>
      <div className='header__hero'>
        <img
          className='img-setup'
          src='image-hero-small.png'
          alt='Meet a group of people'
        />
      </div>

      <HeaderDescription />
    </>
  );
};

export default HeaderSmall;
