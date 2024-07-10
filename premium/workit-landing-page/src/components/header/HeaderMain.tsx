import HeaderImage from './HeaderImage';
import HeaderText from './HeaderText';
import Navigation from './Navigation';

const HeaderMain = () => (
  <header className='header-main'>
    <div className='u-curve u-curve--dark'>
      <Navigation />
      <HeaderText />
    </div>

    <HeaderImage />
  </header>
);

export default HeaderMain;
