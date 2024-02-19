/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        <img src="./logos/logo.png" alt="logo" />
      </a>

      <div className="footer__links">
        <a
          href="https://github.com/fe-nov23-DOMinationDynasty/product_catalog"
          className="footer__link"
          target="_blank"
          rel="noreferrer">
          Github
        </a>

        <a href="#" className="footer__link">
          Contacts
        </a>

        <a href="#" className="footer__link">
          Rights
        </a>
      </div>

      <Link to="/" className="footer__go-top">
        <p className="footer__go-top-text">Back to top</p>
        <div className="footer__go-top-logo-wrap">
          <img
            className="footer__go-top-logo"
            src="./icons/go-top.svg"
            alt="go-top"
          />
        </div>
      </Link>
    </div>
  </footer>
);
