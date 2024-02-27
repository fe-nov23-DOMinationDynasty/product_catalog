import { NavLink } from 'react-router-dom';

import './header.scss';

import { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { BurgerMenu } from '../BurgerMenu';
import { useAppSelector } from '../../app/hooks';
import { Icon } from '../Icon';
import {
  handleIsActive,
} from './utils';

export const Header = () => {

  const [openBurger, setOpenBurger] = useState(false);
  const [currentURL, setCurrentURL] = useState('');
  const [sortField, setSortField] = useState('');

  const favouriteProducts = useAppSelector((state) => state.favouritesReducer);
  const { cartItems } = useAppSelector((state) => state.cartReducer);

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
                  onClick={() => {
                    setCurrentURL('/');
                  }}
                  to="/"
                  className={handleIsActive('header__nav-link', 'is-active')}>
                Home
                </NavLink>
              </li>
              <li className="header__nav-list-item">
                <NavLink
                  onClick={() => {
                    setCurrentURL('catalog/phones');
                  }}
                  to="catalog/phones"
                  className={handleIsActive('header__nav-link', 'is-active')}
                >
                Phones
                </NavLink>
              </li>
              <li className="header__nav-list-item">
                <NavLink
                  onClick={() => {
                    setCurrentURL('catalog/tablets');
                  }}
                  to="catalog/tablets"
                  className={handleIsActive('header__nav-link', 'is-active')}
                >
                Tablets
                </NavLink>
              </li>
              <li className="header__nav-list-item">
                <NavLink
                  onClick={() => {
                    setCurrentURL('catalog/accessories');
                  }}
                  to="catalog/accessories"
                  className={handleIsActive('header__nav-link', 'is-active')}
                >
                Accessories
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="header__buttons-block">
            <div className='header__input-block'>
              <input
                onChange={(event) => {
                  setSortField(event.target.value);
                }}
                value={sortField}
                type="text"
                placeholder='Search...'
                className='header__input'
              />
              <button
                type='button'
                tabIndex={0}
                onClick={() => {
                  if (sortField) {
                    setSortField('');
                  }
                }}
                className='header__search-icon'

              >
                <img src={!sortField
                  ? "./logos/search.svg"
                  : "./logos/close.svg"}
                alt="seacrh"/>
              </button>
            </div>
            <NavLink
              onClick={() => {
                setCurrentURL('favourites');
              }}
              to="favourites"
              className={
                handleIsActive('header__button', 'header__button--is-active')
              }
            >
              {favouriteProducts && favouriteProducts.length > 0 ? (
                <Icon
                  pathImage="./logos/favourites.svg"
                  counter={favouriteProducts.length}
                />
              ) : (
                <img
                  src={currentURL !== 'favourites'
                    ? "./logos/favourites.svg"
                    : "./logos/favourites-selected.svg"}
                  alt="logoFavourite"
                />
              )}
            </NavLink>

            <NavLink
              to="cart"
              className={
                handleIsActive('header__button', 'header__button--is-active')
              }
            >
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
        currentURL={currentURL}
        setCurrentURL={setCurrentURL}
      />
    </>
  );
};


