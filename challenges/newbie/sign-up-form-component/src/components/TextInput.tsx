import {
  CSSProperties,
  ComponentPropsWithoutRef,
  useRef,
  useState,
} from 'react';

const TextInput = ({ ...props }: ComponentPropsWithoutRef<'input'>) => {
  const { placeholder } = props;

  const [isValid, setIsValid] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    const node = inputRef.current;
    let tmpIsValid = true;

    if (node) {
      if (node.value?.trim() === '') {
        tmpIsValid = false;
        setMessage(`${placeholder} cannot be empty`);
      } else if (!node.validity.valid) {
        tmpIsValid = false;
        setMessage(`Looks like this is not an ${placeholder}`);
      }

      setIsValid(() => tmpIsValid);
    }
  };

  let inputElement = (
    <input {...props} onBlur={handleBlur} ref={inputRef} required />
  );

  if (!isValid) {
    const inlineStyle: CSSProperties = {
      border: '2px solid hsl(0, 100%, 74%)',
      color: 'hsl(0, 100%, 74%)',
    };
    inputElement = (
      <input
        {...props}
        onBlur={handleBlur}
        ref={inputRef}
        required
        style={inlineStyle}
      />
    );
  }

  return (
    <>
      <div className='signup__inputarea'>
        {inputElement}
        {!isValid && (
          <img
            src='./icon-error.svg'
            alt='Validationerror'
            className='signup__erroricon'
          />
        )}
      </div>
      {!isValid && <p className='signup__errormessage'>{message}</p>}
    </>
  );
};
export default TextInput;
