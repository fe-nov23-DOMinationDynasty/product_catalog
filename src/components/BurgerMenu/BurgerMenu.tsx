import '../Header/header.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { IconLogo } from '../IconLogo';

type Props = {
  setCloseBurger: (state: boolean) => void;
};

export const BurgerMenu: React.FC<Props> = ({ setCloseBurger }) => (
  <aside id="burgerMenu" className="burger__menu">
    <div className="burger__top">
      <div className="burger__logo">
        <IconLogo />
      </div>

      <a
        onClick={() => {
          setCloseBurger(false);
        }}
        href="#/"
        className="logo_link burger__close">
        <img src="./logos/close.svg" alt="layoutLogo" />
      </a>
    </div>

    <div className="burger__main">
      <ul className="burger-nav_list">
        <li className="burger-list_item">
          <NavLink
            to="#/"
            className={({ isActive }) =>
              classNames('burger-nav_link', { 'burger-is-active': isActive })
            }>
            Home
          </NavLink>
        </li>
        <li className="burger-list_item">
          <NavLink to="#/" className="burger-nav_link">
            Phones
          </NavLink>
        </li>
        <li className="burger-list_item">
          <NavLink to="#/" className="burger-nav_link">
            Tablets
          </NavLink>
        </li>
        <li className="burger-list_item">
          <NavLink to="#/" className="burger-nav_link">
            Accessories
          </NavLink>
        </li>
      </ul>

      <div className="burger__buttons">
        <a href="#/" className="burger__button">
          <img src="./logos/favourites.svg" alt="logoFavourite" />
        </a>

        <a href="#/" className="burger__button">
          <img src="./logos/shopping-bag.svg" alt="logoShoppingBag" />
        </a>
      </div>
    </div>
  </aside>
);
