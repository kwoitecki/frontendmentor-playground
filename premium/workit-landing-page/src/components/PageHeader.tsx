const PageHeader = () => {
  return (
    <header className='header'>
      <div className='bg-pattern-dark'>
        <nav className='header__navigation'>
          <img
            src='logo-light.svg'
            alt='Welcome to the workit landingpage'
            className='header__navigation-image'
          />
          <button className='button button--secondary'>Apply for access</button>
        </nav>

        <div className='header__hero'>
          <h1 className='heading heading--large u-fc-primary-1000'>
            Data <span className='underline'>tailored</span> to
            <br /> your needs.
          </h1>

          <div className='header__hero-actions'>
            <button className='button button--primary header__hero-actions-button'>
              Learn more
            </button>
          </div>
        </div>
      </div>

      <img
        src='image-hero.webp'
        alt='Hero Image Cellphone'
        className='header__hero-img img-clear'
      />
    </header>
  );
};

export default PageHeader;
