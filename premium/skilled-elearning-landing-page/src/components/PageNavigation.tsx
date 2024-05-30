import { FC } from 'react';
import CustomButton from './ui/CustomButton';
import { Mode } from './Mode';

type NavigationProps = {
  mode?: Mode;
};

const PageNavigation: FC<NavigationProps> = ({ mode }) => {
  const image = mode === 'dark' ? 'logo-light.svg' : './logo-dark.svg';
  return (
    <nav className='container'>
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
