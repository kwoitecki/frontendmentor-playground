const PageFooter = () => {
  return (
    <footer className='footer'>
      <div className='footer__image-text'>
        <img className='footer__image' src='./logo.svg' alt='logo equalizer' />

        <div className='footer_text'>
          <p>All rights reserved © Equalizer 2021</p>
          <p>
            Have any problems? Contact us via social media or email us at
            <span className='footer_text-accent'> equalizer@example.com</span>
          </p>
        </div>
      </div>
      <div className='footer__social'>
        <img src='./icon-facebook.svg' alt='Facebook icon' />
        <img src='./icon-instagram.svg' alt='Instagram icon' />
        <img src='./icon-twitter.svg' alt='Twitter icon' />
      </div>
    </footer>
  );
};

export default PageFooter;
