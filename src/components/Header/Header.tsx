import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './Header.scss';
import '@theme-toggles/react/css/Classic.css';

import { useState } from 'react';
import { Classic } from '@theme-toggles/react';
import { LogoLink } from '../LogoLink';
import { BurgerMenu } from '../BurgerMenu';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Icon } from '../Icon';
import { Theme } from '../../enums/Theme';
import { actions as themeActions } from '../../features/themeSlice';

const handleNavigationIsActive = ({ isActive }: { isActive: boolean }) =>
  classNames('nav_link', { 'is-active': isActive });

const handleHeaderButtonIsActive = ({ isActive }: { isActive: boolean }) =>
  classNames('header__button', { 'header__button--is-active': isActive });

export const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const dispatch = useAppDispatch();

  const favouriteProducts = useAppSelector((state) => state.favouritesReducer);
  const { cartItems } = useAppSelector((state) => state.cartReducer);
  const isDarkMode
  = useAppSelector((state) => state.themeReducer) === Theme.Dark;

  const handleThemeChanged = (isToggled: boolean) => {
    const theme = isToggled ? Theme.Dark : Theme.Light;

    dispatch(themeActions.setTheme(theme));
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav_menu_start">
            <div className="header__logo">
              <LogoLink />
            </div>

            <ul className="nav_list">
              <li className="list_item">
                <NavLink to="/" className={handleNavigationIsActive}>
                  Home
                </NavLink>
              </li>
              <li className="list_item">
                <NavLink
                  to="catalog/phones"
                  className={handleNavigationIsActive}>
                  Phones
                </NavLink>
              </li>
              <li className="list_item">
                <NavLink
                  to="catalog/tablets"
                  className={handleNavigationIsActive}>
                  Tablets
                </NavLink>
              </li>
              <li className="list_item">
                <NavLink
                  to="catalog/accessories"
                  className={handleNavigationIsActive}>
                  Accessories
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="header__buttons-block">
            <div className="header__icon-theme">
              <Classic
                toggled={isDarkMode}
                onToggle={handleThemeChanged}
                style={{
                  fontSize: '30px',
                }}
                className="header__theme-toggler"
                placeholder={null}
              />
            </div>

            <NavLink to="favourites" className={handleHeaderButtonIsActive}>
              <div className="header__icon-wrapper">
                <Icon
                  pathImage="./logos/favourites.svg"
                  counter={favouriteProducts.length}
                />
              </div>
            </NavLink>

            <NavLink to="cart" className={handleHeaderButtonIsActive}>
              <div className="header__icon-wrapper">
                <Icon
                  pathImage="./logos/shopping-bag.svg"
                  counter={cartItems.length}
                />
              </div>
            </NavLink>
          </div>

          <div className="burger">
            <NavLink
              onClick={() => {
                setOpenBurger(true);
              }}
              to="#/"
              className="header__burger-menu">
              <img src="./logos/burger-menu.svg" alt="logoShoppingBag" />
            </NavLink>
          </div>
        </nav>
      </header>

      {openBurger && <BurgerMenu setCloseBurger={setOpenBurger} />}
    </>
  );
};
