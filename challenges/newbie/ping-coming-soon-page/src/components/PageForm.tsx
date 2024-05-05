import { FormEvent, useRef, useState } from 'react';

const PageForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    const node = inputRef.current;
    let tmpIsValid = true;
    if (node) {
      tmpIsValid = node.validity.valid;
    }

    setIsValid(() => tmpIsValid);
    setEmail(() => node?.value || '');
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Data submitted ${email}`);
  };

  let cssClass = 'header__form__input';
  if (!isValid) {
    cssClass += ' u-border-red';
  }

  return (
    <form className='header__form' onSubmit={submitHandler}>
      <input
        type='email'
        className={cssClass}
        placeholder='Your email address…'
        required
        ref={inputRef}
        onBlur={handleBlur}
      />
      {!isValid && (
        <p className='header__form__input__error u-fc-light-red'>
          Please provide a valid email address
        </p>
      )}
      <button
        type='submit'
        className='header__form__button u-bg-blue u-fc-white u-fw-normal'
      >
        Notify Me
      </button>
    </form>
  );
};

export default PageForm;
