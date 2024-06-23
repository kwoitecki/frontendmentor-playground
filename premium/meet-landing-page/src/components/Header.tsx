import { useEffect, useState } from 'react';
import HeaderSmall from './controls/HeaderSmall';
import HeaderLarge from './controls/HeaderLarge';

const Header = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = windowSize.width < 1440 ? <HeaderSmall /> : <HeaderLarge />;

  return (
    <header className='header'>
      <div className='header__logo'>
        <img
          className='img-setup'
          src='logo.svg'
          alt='Welcome to the meet landing page'
        />
      </div>
      {content}
    </header>
  );
};

export default Header;
