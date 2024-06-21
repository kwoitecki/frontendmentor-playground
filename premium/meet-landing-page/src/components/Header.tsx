import HeaderDescription from './controls/HeaderDescription';

const Header = () => {
  const headerLogo = (
    <div className='header__logo'>
      <img
        className='img-setup'
        src='/logo.svg'
        alt='Welcome to the meet landing page'
      />
    </div>
  );

  return (
    <header className='header'>
      {headerLogo}
      <div className='header__hero'>
        <img
          className='img-setup'
          src='/image-hero-small.png'
          alt='Meet a group of people'
        />
      </div>
      <HeaderDescription />
    </header>
  );
};

export default Header;
