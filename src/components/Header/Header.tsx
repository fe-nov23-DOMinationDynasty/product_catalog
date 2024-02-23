/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

import './header.scss';

import { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { BurgerMenu } from '../BurgerMenu';

// function filterDevices(devices, query) {
//   const normalizedQuery = query.trim().toLowerCase();
//   let copyDevices = [...devices];

//   if (normalizedQuery) {
//     copyDevices = copyDevices.filter(
//       device => device.title.toLowerCase().includes(normalizedQuery)
//         || device.description.toLowerCase().includes(normalizedQuery),
//     );
//   }

//   return copyDevices;
// }

export const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const [currentURL, setCurrentURL] = useState('');
  const [sortField, setSortField] = useState('');
  // const filteredDevices = filterDevices(qw, sortField);

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
                onChange={(event) => {
                  setSortField(event.target.value);
                }}
                value={sortField}
                type="text"
                placeholder='Search...'
                className='header__input'
              />
              <img
                tabIndex={0}
                onClick={() => {
                  if (sortField) {
                    setSortField('');
                  }
                }}
                className='icon__search'
                src={!sortField
                  ? "./logos/search.svg"
                  : "./logos/close.svg"}
                alt="seacrh"
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
              to={currentURL}
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
