import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './header.scss';

import { LogoLink } from '../LogoLink';
import { useState } from 'react';
import { BurgerMenu } from '../BurgerMenu';


export const Header = () =>
(
  const [openBurger, setOpenBurger] = useState(false);
  <header className="header">
    <nav className="nav">
      <div className="nav_menu_start">
        <LogoLink />

        <ul className="nav_list">
          <li className="list_item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames('nav_link', { ' is-active': isActive })
              }>
              Home
            </NavLink>
          </li>
          <li className="list_item">
            <NavLink to="phones/catalog/page/1" className="nav_link">
              Phones
            </NavLink>
          </li>
          <li className="list_item">
            <NavLink to="tablets/catalog/page/1" className="nav_link">
              Tablets
            </NavLink>
          </li>
          <li className="list_item">
            <NavLink to="accessories/catalog/page/1" className="nav_link">
              Accessories
            </NavLink>
          </li>
        </ul>
      </div>

          <div className="header__buttons-block">
            <a href="#/" className="header__button">
              <img src="./logos/favourites.svg" alt="logoFavourite" />
            </a>

            <a href="#/" className="header__button">
              <img src="./logos/shopping-bag.svg" alt="logoShoppingBag" />
            </a>
          </div>

          <div className="burger">
            <a
              onClick={() => {
                setOpenBurger(true);
              }}
              href="#/"
              className="header__burger-menu">
              <img src="./logos/burger-menu.svg" alt="logoShoppingBag" />
            </a>
          </div>
        </nav>
      </header>

      {openBurger && <BurgerMenu setCloseBurger={setOpenBurger} />}
    </>
  );
};
