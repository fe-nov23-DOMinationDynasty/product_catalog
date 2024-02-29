import { NavLink, useLocation } from 'react-router-dom';

import './Header.scss';
import '@theme-toggles/react/css/Classic.css';

import { useState } from 'react';
import { Classic } from '@theme-toggles/react';
import { LogoLink } from '../LogoLink';
import { BurgerMenu } from '../BurgerMenu';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as themeActions } from '../../features/themeSlice';
import { Icon } from '../Icon';
import {
  handleIsActive,
} from './utils';
import { Theme } from '../../enums/Theme';

export const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const dispatch = useAppDispatch();

  const favouriteProducts = useAppSelector((state) => state.favouritesReducer);
  const { cartItems } = useAppSelector((state) => state.cartReducer);
  const location = useLocation();
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;

  const handleThemeChanged = (isToggled: boolean) => {
    const theme = isToggled ? Theme.Dark : Theme.Light;

    dispatch(themeActions.setTheme(theme));
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="header__nav_menu-start">
            <div className="header__logo">
              <LogoLink />
            </div>

            <ul className="header__nav-list">
              <li className="header__nav-list-item">
                <NavLink
                  to="/"
                  className={handleIsActive('header__nav-link', 'is-active')}>
                  Home
                </NavLink>
              </li>
              <li className="header__nav-list-item">
                <NavLink
                  to="phones"
                  className={handleIsActive('header__nav-link', 'is-active')}
                >
                  Phones
                </NavLink>
              </li>
              <li className="header__nav-list-item">
                <NavLink
                  to="tablets"
                  className={handleIsActive('header__nav-link', 'is-active')}
                >
                  Tablets
                </NavLink>
              </li>
              <li className="header__nav-list-item">
                <NavLink
                  to="accessories"
                  className={handleIsActive('header__nav-link', 'is-active')}
                >
                  Accessories
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="header__buttons-block">
            <div className="header__icon-theme">
              <Classic
                toggled={isDark}
                onToggle={handleThemeChanged}
                style={{
                  fontSize: '30px',
                }}
                className="header__theme-toggler"
                placeholder={null}
              />
            </div>

            <NavLink
              to="favourites"
              className={
                handleIsActive('header__button', 'header__button--is-active')}
            >
              <div className="header__icon-wrapper">
                <Icon
                  pathImage="./logos/favourites.svg"
                  counter={favouriteProducts.length}
                />
              </div>
            </NavLink>

            <NavLink
              to="cart"
              className={
                handleIsActive('header__button', 'header__button--is-active')}
            >
              <div className="header__icon-wrapper">
                <Icon
                  pathImage="./logos/shopping-bag.svg"
                  counter={cartItems.length}
                />
              </div>
            </NavLink>
          </div>

          <div className="header__burger-menu">
            <button
              type='button'
              onClick={() => {
                setOpenBurger(true);
              }}
              className="header__burger-button">
              <img src="./logos/burger-menu.svg" alt="logoShoppingBag" />
            </button>
          </div>
        </nav>
      </header>


      <BurgerMenu
        setCloseBurger={setOpenBurger}
        openBurger={openBurger}
        location={location.pathname}
      />
    </>
  );
};


