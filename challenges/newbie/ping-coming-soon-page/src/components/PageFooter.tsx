import {
  // faFacebook,
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PageFooter = () => {
  return (
    <footer className='footer'>
      <div className='footer__icons'>
        <div className='footer__icons-circle'>
          <FontAwesomeIcon icon={faFacebookF} />
        </div>

        <div className='footer__icons-circle'>
          <FontAwesomeIcon icon={faTwitter} />
        </div>

        <div className='footer__icons-circle'>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
      <p className='footer__copyright u-fw-light'>
        &copy; Copyright Ping. All rights reserved.
      </p>
    </footer>
  );
};

export default PageFooter;
