import { FC } from 'react';
import CustomButton from './CustomButton';

type NavigationProps = {
  mode: 'light' | 'dark';
};

const Navigation: FC<NavigationProps> = ({ mode }) => {
  const image = mode === 'dark' ? 'logo-light.svg' : './logo-dark.svg';
  const buttonStyle = mode === 'dark' ? 'dark' : '';

  return (
    <nav className='navigation'>
      <ul className='navigation__items'>
        <li>
          <img className='navigation__logo' src={image} alt='Skilled Logo' />
        </li>
        <li>
          <CustomButton style={buttonStyle} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
