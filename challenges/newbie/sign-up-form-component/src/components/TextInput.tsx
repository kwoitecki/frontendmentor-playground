import { ComponentPropsWithoutRef, useRef, useState } from 'react';

const TextInput = ({ ...props }: ComponentPropsWithoutRef<'input'>) => {
  const { placeholder } = props;

  const [isValid, setIsValid] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    const node = inputRef.current;
    let isValid = true;

    if (node) {
      if (node.value === '') {
        isValid = false;
        setMessage(`${placeholder} cannot be empty`);
      } else if (!node.validity.valid) {
        isValid = false;
        setMessage(`Looks like this is not an ${placeholder}`);
      }

      setIsValid(() => isValid);
    }
  };

  return (
    <>
      <input {...props} onBlur={handleBlur} ref={inputRef} required />
      {!isValid && (
        <>
          <img
            src='./icon-error.svg'
            alt='Validationerror'
            className='signup__erroricon'
          />
          <p className='signup__errormessage'>{message}</p>
        </>
      )}
    </>
  );
};
export default TextInput;
