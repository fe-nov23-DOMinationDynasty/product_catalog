import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './header.scss';

import { LogoLink } from '../LogoLink';

export const Header = () => (
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
            <NavLink to="catalog/phones" className="nav_link">
              Phones
            </NavLink>
          </li>
          <li className="list_item">
            <NavLink to="catalog/tablets" className="nav_link">
              Tablets
            </NavLink>
          </li>
          <li className="list_item">
            <NavLink to="catalog/accessories" className="nav_link">
              Accessories
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="buttons_block">
        <a href="#/" className="button button_link">
          <img src="./logos/favourites.svg" alt="logoFavourite" />
        </a>

        <a href="#/" className="button button_link">
          <img src="./logos/shopping-bag.svg" alt="logoShoppingBag" />
        </a>
      </div>
    </nav>
  </header>
);
