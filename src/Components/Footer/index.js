import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h4>Contact Information</h4>
        <p>Address: fourth & Blanchard Building, Seattle, USA</p>
        <p>Phone: (206) 123-4567</p>
        <p>Email: info@tesfayeBoutique.com</p>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;