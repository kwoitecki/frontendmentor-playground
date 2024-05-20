import { FC } from 'react';

type CustomButtonProps = {
  style?: 'dark' | 'lite' | '';
  onClick?: () => void;
};

const CustomButton: FC<CustomButtonProps> = ({ style, onClick }) => {
  const baseStyle = 'custom-button';
  const buttonClass = baseStyle + (style ? ` custom-button--${style}` : '');

  return (
    <button className={buttonClass} onClick={onClick}>
      Get Started
    </button>
  );
};

export default CustomButton;
