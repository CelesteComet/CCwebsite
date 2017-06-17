import React from 'react';
import FooterLogo from '../images/logo-dark@2x.png';
import fbLogo from '../images/fb.svg';

function Footer() {
  return (
    <footer>
      <div>
        <img className="facebook-circle-icon" src={fbLogo} alt="Facebook" />
      </div>
      <p className="credits">大果文化顧問<br />Core Cultural Management</p>
      <div className="foot-logo">
        <img className="CCicon" src={FooterLogo} alt="Core Cultural"></img>
      </div>
    </footer>
  );
}

export default Footer;