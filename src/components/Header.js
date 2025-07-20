import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header bg-primary text-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>Los Delfines Shuttles</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a href="/" className="nav-link text-light">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link text-light">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link text-light">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
