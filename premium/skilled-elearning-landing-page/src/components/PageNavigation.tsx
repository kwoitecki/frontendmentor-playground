import { FC } from 'react';
import CustomButton from './ui/CustomButton';
import { Mode } from './Mode';

type NavigationProps = {
  mode?: Mode;
  ariaLabel: string;
};

const PageNavigation: FC<NavigationProps> = ({ mode, ariaLabel }) => {
  const image = mode === 'dark' ? 'logo-light.svg' : './logo-dark.svg';
  return (
    <nav className='container' aria-label={ariaLabel}>
      <ul className='navigation'>
        <li className='navigation__items'>
          <img src={image} className='navigation__logo' alt='logo' />
        </li>
        <li className='navigation__items'>
          <CustomButton mode={mode} />
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
