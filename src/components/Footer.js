import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Company Information */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Travel with safety, comfort, and confidence. Your journey starts
              here! We specialize in reliable transfer and shuttle services to
              make your trip stress-free.
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-md-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i> Address: Tambor,
                Puntarenas
              </li>
              <li>
                <i className="fas fa-phone"></i> Phone: +506 87436768
              </li>
              <li>
                <i className="fas fa-envelope"></i> Email:
                contact@delfinesshuttles.com
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-md-4">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/terms" className="text-light">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-light">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p>
            &copy; {new Date().getFullYear()} Los Delfines Shuttles. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
