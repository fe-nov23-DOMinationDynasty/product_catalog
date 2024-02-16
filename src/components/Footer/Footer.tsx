/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React from 'react';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        <img src="./imgs/Logo.png" alt="" />
      </a>
      <div className="footer__links">
        <a href="#" className="footer__link">
          Github
        </a>

        <a href="#" className="footer__link">
          Contacts
        </a>

        <a href="#" className="footer__link">
          Rights
        </a>
      </div>
      <a href="#" className="footer__go-top">
        <p className="footer__go-top-text" />
        <img
          className="footer__go-top-logo"
          src="./imgs/go-top.svg"
          alt="go-top"
        />
      </a>
    </div>
  </footer>
);
