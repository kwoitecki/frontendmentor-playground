import { FC } from 'react';
import { Mode } from '../Mode';

type ButtonProps = {
  mode?: Mode;
  onClick?: () => void;
};

const CustomButton: FC<ButtonProps> = ({ mode, onClick }) => {
  const cssBaseClass = 'button';

  const buttonClass = mode
    ? `${cssBaseClass} ${cssBaseClass}--${mode}`
    : cssBaseClass;

  return (
    <button className={buttonClass} onClick={onClick}>
      Get Started
    </button>
  );
};

export default CustomButton;
