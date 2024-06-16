const Header = () => {
  const headerLogo = (
    <div className='header__logo'>
      <img src='/logo.svg' alt='Welcome to the meet landing page' />
    </div>
  );
  const headerText = (
    <div className='header__text'>
      <h1>Group Chat for Everyone</h1>
      <p>
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <button>Download v1.3</button>
      <button>What is it?</button>
    </div>
  );

  return (
    <header className='header'>
      {headerLogo}
      <div className='header__hero'>
        <img src='/image-hero-small.png' alt='Meet a group of people' />
      </div>
      {headerText}
    </header>
  );
};

export default Header;
