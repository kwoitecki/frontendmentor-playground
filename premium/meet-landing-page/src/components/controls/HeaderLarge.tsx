import HeaderDescription from './HeaderDescription';

const HeaderLarge = () => {
  return (
    <div className='header--large'>
      <div className='header--large__left'>
        <img
          className='img-setup header--large-img-left'
          src='image-hero-left.png'
          alt='Meet a group of people left side'
        />
      </div>

      <HeaderDescription />

      <div className='header--large-right'>
        <img
          className='img-setup header--large-img-right'
          src='image-hero-right.png'
          alt='Meet a group of people right side'
        />
      </div>
    </div>
  );
};

export default HeaderLarge;
