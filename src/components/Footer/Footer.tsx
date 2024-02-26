/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoLink } from '../LogoLink';
import './footer.scss';
import '../../styles/blocks/button.scss';
import '../../styles/utils/text-styles.scss';

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__wrapper container">
      <LogoLink />

      <div className="footer__links uppercase">
        <a
          href="https://github.com/fe-nov23-DOMinationDynasty/product_catalog"
          className="footer__link"
          target="_blank"
          rel="noreferrer">
          Github
        </a>

        <Link to="/contacts" className="footer__link">
          Contacts
        </Link>

        <Link to="/rights" className="footer__link">
          Rights
        </Link>
      </div>

      <button type="button" className="footer__go-top" onClick={scrollToTop}>
        <span className="footer__go-top-text">Back to top</span>
        <i className="button button--top" />
      </button>
    </div>
  </footer>
);
