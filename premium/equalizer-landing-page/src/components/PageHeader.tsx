import { useEffect, useState } from 'react';
import Hero from './controls/Hero';

const PageHeader = () => {
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

  const isVisible = windowSize.width > 767;

  return (
    <header className='header'>
      <img src='./logo.svg' alt='logo equalizer' className='header__logo' />
      <img
        src='./bg-pattern-1.svg'
        alt='background pattern'
        className='header__background-pattern'
        aria-visible={isVisible}
      />
      <Hero />
    </header>
  );
};

export default PageHeader;
