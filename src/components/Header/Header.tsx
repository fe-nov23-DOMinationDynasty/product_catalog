import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

import './header.scss';

import { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { BurgerMenu } from '../BurgerMenu';

export const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const [currentURL, setCurrentURL] = useState('');

  const handleNavigationIsActive = ({ isActive }: {isActive: boolean}) =>
    classNames('nav_link', { 'is-active': isActive });

  const handleHeaderButtonIsActive = ({ isActive }: {isActive: boolean}) =>
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
                <NavLink
                  onClick={() => {
                    setCurrentURL('/');
                  }}
                  to="/"
                  className={handleNavigationIsActive}>
                Home
                </NavLink>
              </li>
              <li className="list_item">
                <NavLink
                  onClick={() => {
                    setCurrentURL('cart');
                  }}
                  to="catalog/phones"
                  className={handleNavigationIsActive}
                >
                Phones
                </NavLink>
              </li>
              <li className="list_item">
                <NavLink
                  onClick={() => {
                    setCurrentURL('catalog/tablets');
                  }}
                  to="catalog/tablets"
                  className={handleNavigationIsActive}
                >
                Tablets
                </NavLink>
              </li>
              <li className="list_item">
                <NavLink
                  onClick={() => {
                    setCurrentURL('catalog/accessories');
                  }}
                  to="catalog/accessories"
                  className={handleNavigationIsActive}
                >
                Accessories
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="header__buttons-block">
            <div className='header__block__input'>
              <input
                type="text"
                placeholder='Search...'
                className='header__input'
              />
            </div>
            <NavLink
              onClick={() => {
                setCurrentURL('favourites');
              }}
              to="favourites"
              className={handleHeaderButtonIsActive}
            >

              <img
                src={currentURL !== 'favourites'
                  ? "./logos/favourites.svg"
                  : "./logos/favourites-selected.svg"}
                alt="logoFavourite"
              />

            </NavLink>

            <NavLink
              onClick={() => {
                setCurrentURL('cart');
              }}
              to="cart"
              className={handleHeaderButtonIsActive}
            >
              <img src="./logos/shopping-bag.svg" alt="logoShoppingBag" />
            </NavLink>
          </div>

          <div className="burger">
            <Link
              onClick={() => {
                setOpenBurger(true);
              }}
              to="/"
              className="header__burger-menu">
              <img src="./logos/burger-menu.svg" alt="logoShoppingBag" />
            </Link>
          </div>
        </nav>
      </header>


      <BurgerMenu
        setCloseBurger={setOpenBurger}
        openBurger={openBurger}
        currentURL={currentURL}
        setCurrentURL={setCurrentURL}
      />
    </>
  );
};
