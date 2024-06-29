const PageHeader = () => {
  return (
    <header className='header'>
      <nav className='header__navigation'>
        <img
          src='logo-light.svg'
          alt='Welcome to the workit landingpage'
          className='header__navigation-image'
        />
        <a href='#' className='header__navigation-link'>
          Apply for access
        </a>
      </nav>

      <div className='hero'>
        <h1 className='hero__title'>Data tailored to your needs.</h1>
        <button>Learn more</button>

        <div className='hero__image-container'>
          <img
            src='image-hero-mobile.png'
            alt='Hero Image Cellphone'
            className='hero__image-img img-clear'
          />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
