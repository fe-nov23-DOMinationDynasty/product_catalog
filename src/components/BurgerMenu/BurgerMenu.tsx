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
              className={({ isActive }) =>
                classNames('burger__nav__link',
                  { 'burger__is--active': isActive })
              }>
              Home
            </NavLink>
          </li>
          <li className="burger__list__item">
            <NavLink
              to="phones/catalog/page/1"
              onClick={() => {
                setCurrentURL('phones/catalog/page/1');
              }}
              className={({ isActive }) =>
                classNames('burger__nav__link',
                  { 'burger__is--active': isActive })
              }
            >
              Phones
            </NavLink>
          </li>
          <li className="burger__list__item">
            <NavLink
              to="tablets/catalog/page/1"
              onClick={() => {
                setCurrentURL('tablets/catalog/page/1');
              }}
              className={({ isActive }) =>
                classNames('burger__nav__link',
                  { 'burger__is--active': isActive })
              }
            >
              Tablets
            </NavLink>
          </li>
          <li className="burger__list__item">
            <NavLink
              to="accessories/catalog/page/1"
              onClick={() => {
                setCurrentURL('accessories/catalog/page/1');
              }}
              className={({ isActive }) =>
                classNames('burger__nav__link',
                  { 'burger__is--active': isActive })
              }
            >
              Accessories
            </NavLink>
          </li>
        </ul>

        <div className="burger__buttons">
          <NavLink to="/src/pages/FavouritesPage" className="burger__button">
            <img src="./logos/favourites.svg" alt="logoFavourite" />
          </NavLink>

          <NavLink to="/src/pages/CartPage" className="burger__button">
            <img src="./logos/shopping-bag.svg" alt="logoShoppingBag" />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
