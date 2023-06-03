import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h4>Contact Information</h4>
        <p>Address: Downtown Seattle, USA</p>
        <a href="www.Tesfayestore.com" className="contact-info">  
         www.TesfayeStore.com</a>
         <p className="contact-info">  Phone: (206) 123-4567</p>
        <p className="contact-info">     Email: info@tesfayeStore.com</p>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};
                 
export default Footer;                     