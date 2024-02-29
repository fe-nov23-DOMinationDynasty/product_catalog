/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { LogoLink } from '../LogoLink';
import './Footer.scss';
import '../../styles/blocks/button.scss';
import '../../styles/utils/text-styles.scss';
import { useAppSelector } from '../../app/hooks';
import { Theme } from '../../enums/Theme';

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

export const Footer: React.FC = () => {
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;

  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <LogoLink />

        <div className="footer__links uppercase">
          <a
            href="https://github.com/fe-nov23-DOMinationDynasty/product_catalog"
            className={cn('footer__link', {
              'footer__link--dark': isDark,
            })}
            target="_blank"
            rel="noreferrer">
            Github
          </a>

          <Link to="/contacts" className={cn('footer__link', {
            'footer__link--dark': isDark,
          })}>
            Contacts
          </Link>

          <Link to="/rights" className={cn('footer__link', {
            'footer__link--dark': isDark,
          })}>
            Rights
          </Link>
        </div>

        <button type="button" className="footer__go-top" onClick={scrollToTop}>
          <span
            className={cn('footer__go-top-text', {
              'footer__go-top-text--dark': isDark,
            })}
          >
            Back to top
          </span>

          <i className={cn('button button--top', {
            'button--dark': isDark,
            'button--top--dark': isDark,
          })} />
        </button>
      </div>
    </footer>
  );
};
