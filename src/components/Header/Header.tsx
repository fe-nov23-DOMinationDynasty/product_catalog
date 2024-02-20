import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './header.scss';

import { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { BurgerMenu } from '../BurgerMenu';

export const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const handleNavigationIsActive = ({ isActive }: {isActive: boolean}) =>
    classNames('nav_link', { ' is-active': isActive });

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
                  to="/"
                  className={handleNavigationIsActive}>
                Home
                </NavLink>
              </li>
              <li className="list_item">
                <NavLink
                  to="catalog/phones"
                  className={handleNavigationIsActive}
                >
                Phones
                </NavLink>
              </li>
              <li className="list_item">
                <NavLink
                  to="catalog/tablets"
                  className={handleNavigationIsActive}
                >
                Tablets
                </NavLink>
              </li>
              <li className="list_item">
                <NavLink
                  to="catalog/accessories"
                  className={handleNavigationIsActive}
                >
                Accessories
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="header__buttons-block">
            <NavLink to="favourites" className="header__button">
              <img src="./logos/favourites.svg" alt="logoFavourite" />
            </NavLink>

            <NavLink to="cart" className="header__button">
              <img src="./logos/shopping-bag.svg" alt="logoShoppingBag" />
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
