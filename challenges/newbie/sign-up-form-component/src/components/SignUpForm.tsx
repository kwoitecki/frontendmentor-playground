import TextInput from './TextInput';

const fields = [
  {
    type: 'text',
    placeholder: 'First Name',
  },
  {
    type: 'text',
    placeholder: 'Last Name',
  },
  {
    type: 'email',
    placeholder: 'Email Address',
  },
  {
    type: 'password',
    placeholder: 'Password',
  },
];

const SignUpForm = () => {
  return (
    <form className='signup__form'>
      <p className='signup__accent'>
        <span className='u-text-bolder'>Try it free 7 days</span> then $20/mo.
        thereafter
      </p>

      <div className='signup_form_container'>
        {fields.map((field, index) => (
          <TextInput
            key={index}
            className={`${index !== 0 ? 'u-mt-20' : ''}`}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}

        <input
          type='submit'
          className='u-mt-35'
          value='Claim your free trial'
        />

        <p className='signup__terms'>
          By clicking the button, you are agreeing to our{' '}
          <span className='u-text-red u-text-bolder'>Terms and Services</span>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
