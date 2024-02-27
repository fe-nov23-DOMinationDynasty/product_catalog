import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './Header.scss';
import "@theme-toggles/react/css/Classic.css";

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
  const isDarkMode = useAppSelector(state => state.themeReducer) === Theme.Dark;

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
                  to="/phones"
                  className={handleNavigationIsActive}>
                  Phones
                </NavLink>
              </li>
              <li className="list_item">
                <NavLink
                  to="/tablets"
                  className={handleNavigationIsActive}>
                  Tablets
                </NavLink>
              </li>
              <li className="list_item">
                <NavLink
                  to="/accessories"
                  className={handleNavigationIsActive}>
                  Accessories
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="header__buttons-block">
            <Classic
              toggled={isDarkMode}
              onToggle={handleThemeChanged}
              style={{
                fontSize: '30px'
              }}
              className='header__theme-toggler'
              placeholder={null}
            />

            <NavLink to="favourites" className={handleHeaderButtonIsActive}>
              {favouriteProducts && favouriteProducts.length > 0 ? (
                <Icon
                  pathImage="./logos/favourites.svg"
                  counter={favouriteProducts.length}
                />
              ) : (
                <img src="./logos/favourites.svg" alt="logoFavourite" />
              )}
            </NavLink>

            <NavLink to="cart" className={handleHeaderButtonIsActive}>
              {cartItems && !!cartItems.length ? (
                <Icon
                  pathImage="./logos/shopping-bag.svg"
                  counter={cartItems.length}
                />
              ) : (
                <img src="./logos/shopping-bag.svg" alt="logoShoppingBag" />
              )}
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
