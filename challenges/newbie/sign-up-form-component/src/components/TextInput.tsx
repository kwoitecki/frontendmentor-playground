import { ComponentPropsWithoutRef } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'>;

const TextInput = ({ ...props }: InputProps) => {
  <input {...props} />;
};

export default TextInput;
