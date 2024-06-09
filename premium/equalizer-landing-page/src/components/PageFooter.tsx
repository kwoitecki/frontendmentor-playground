import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className='social-icon'>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className='social-icon__item'
          />
        </div>
        <div className='social-icon'>
          <FontAwesomeIcon icon={faInstagram} className='social-icon__item' />
        </div>
        <div className='social-icon'>
          <FontAwesomeIcon icon={faTwitter} className='social-icon__item' />
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
