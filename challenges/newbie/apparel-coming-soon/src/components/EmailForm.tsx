import { FormEvent, useRef, useState } from 'react';

const EmailForm = () => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleBlur = () => {
    const inputNode = emailInputRef.current;

    if (inputNode) {
      const empty = inputNode.value === '';
      setIsValid(() => !empty && inputNode.validity.valid);
    }
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputNode = emailInputRef.current;
    console.log('Email submitted: ' + inputNode?.value);
  };

  let inputEmailStyles = 'content__form__input';
  if (!isValid) {
    inputEmailStyles += ' content__form__input_error';
  }

  return (
    <>
      <form className='content__form' onSubmit={submitHandler}>
        <input
          onBlur={handleBlur}
          className={inputEmailStyles}
          type='email'
          placeholder='Email Address'
          ref={emailInputRef}
          required
        />
        {!isValid && (
          <img
            src='./img/icon-error.svg'
            alt='Error icon'
            className='content__form__erroricon'
          />
        )}
        <button
          className='content__form__button u-fc-white u-fw-bold'
          type='submit'
        >
          <img src='./img/icon-arrow.svg' />
        </button>
      </form>
      {!isValid && (
        <p className='content__form__errormessage'>
          Please provide a valid email
        </p>
      )}
    </>
  );
};

export default EmailForm;
