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
        Try it free 7 days then $20/mo. thereafter
      </p>

      <div className='signup_form_container'>
        {fields.map((field, index) => (
          <input
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
          By clicking the button, you are agreeing to our Terms and Services
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
