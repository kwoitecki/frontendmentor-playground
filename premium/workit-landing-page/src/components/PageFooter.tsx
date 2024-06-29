const PageFooter = () => {
  return (
    <footer className='footer'>
      <img
        src='logo-dark.svg'
        className='footer__logo img-clear'
        alt='Company logo'
      />

      <div className='footer__links'>
        <img src='icon-facebook.svg' alt='Follow us on facebook' />
        <img src='icon-instagram.svg' alt='Follow us on instagram' />
        <img src='icon-twitter.svg' alt='Follow us on twitter' />
      </div>
    </footer>
  );
};

export default PageFooter;
