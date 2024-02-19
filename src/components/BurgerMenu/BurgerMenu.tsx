import { useState } from 'react';
import classNames from 'classnames';

import '../Header/header.scss';
import { NavLink } from 'react-router-dom';
import { LogoLink } from '../LogoLink';

type Props = {
  setCloseBurger: (state: boolean) => void;
};

export const BurgerMenu: React.FC<Props> = ({ setCloseBurger }) => {
  const [currentURL, setCurrentURL] = useState('');

  const handleBurgerLinkIsActive = ({ isActive }: { isActive: boolean }) =>
    classNames('burger__nav__link',
      { 'burger__is--active': isActive });

  return (
    <aside id="burgerMenu" className="burger__menu">
      <div className="burger__top">
        <div className="burger__logo">
          <LogoLink />
        </div>

        <a
          onClick={() => {
            setCloseBurger(false);
          }}
          href={`#${currentURL}`}
          className="burger__close">
          <img src="./logos/close.svg" alt="layoutLogo" />
        </a>
      </div>

      <div className="burger__main">
        <ul className="burger__nav__list">
          <li className="burger__list__item">
            <NavLink
              to="/"
              onClick={() => {
                setCurrentURL('/');
              }}
              className={handleBurgerLinkIsActive}
            >
              Home
            </NavLink>
          </li>
          <li className="burger__list__item">
            <NavLink
              to="catalog/phones"
              onClick={() => {
                setCurrentURL('catalog/phones');
              }}
              className={handleBurgerLinkIsActive}
            >
              Phones
            </NavLink>
          </li>
          <li className="burger__list__item">
            <NavLink
              to="catalog/tablets"
              onClick={() => {
                setCurrentURL('catalog/tablets');
              }}
              className={handleBurgerLinkIsActive}
            >
              Tablets
            </NavLink>
          </li>
          <li className="burger__list__item">
            <NavLink
              to="catalog/accessories"
              onClick={() => {
                setCurrentURL('catalog/accessories');
              }}
              className={handleBurgerLinkIsActive}
            >
              Accessories
            </NavLink>
          </li>
        </ul>

        <div className="burger__buttons">
          <NavLink to="favourites" className="burger__button">
            <img src="./logos/favourites.svg" alt="logoFavourite" />
          </NavLink>

          <NavLink to="cart" className="burger__button">
            <img src="./logos/shopping-bag.svg" alt="logoShoppingBag" />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
