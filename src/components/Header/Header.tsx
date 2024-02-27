import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './Header.scss';

import { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { BurgerMenu } from '../BurgerMenu';
import { useAppSelector } from '../../app/hooks';
import { Icon } from '../Icon';

export const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const favouriteProducts = useAppSelector((state) => state.favouritesReducer);
  const { cartItems } = useAppSelector((state) => state.cartReducer);

  const handleNavigationIsActive = ({ isActive }: { isActive: boolean }) =>
    classNames('nav_link', { 'is-active': isActive });

  const handleHeaderButtonIsActive = ({ isActive }: { isActive: boolean }) =>
    classNames('header__button', { 'header__button--is-active': isActive });

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
