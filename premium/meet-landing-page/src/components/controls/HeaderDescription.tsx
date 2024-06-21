const HeaderDescription = () => {
  return (
    <div className='header__description'>
      <h1 className='header__description-title'>Group Chat for Everyone</h1>
      <p className='header__description-text u-fc-primary-600'>
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <div className='header__description-action'>
        <button className='btn btn--large u-bg-secondary1-400 u-fc-primary-900'>
          Download <span className='u-fc-secondary1-800'>v1.3</span>
        </button>
        <button className='btn btn--small u-bg-secondary2-500 u-fc-primary-900'>
          What is it?
        </button>
      </div>
    </div>
  );
};

export default HeaderDescription;
