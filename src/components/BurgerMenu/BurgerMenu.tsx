// import { useState } from 'react';
import classNames from 'classnames';

import '../Header/header.scss';
import { NavLink } from 'react-router-dom';
import { LogoLink } from '../LogoLink';

type Props = {
  openBurger: boolean
  setCloseBurger: (state: boolean) => void;
  currentURL:string;
  setCurrentURL: (state:string) => void
};

export const BurgerMenu: React.FC<Props> = ({
  openBurger,
  setCloseBurger,
  currentURL,
  setCurrentURL
}) => {
  // const [currentURL, setCurrentURL] = useState('');

  const handleBurgerLinkIsActive = ({ isActive }: { isActive: boolean }) =>
    classNames('burger__nav__link',
      { 'burger__is--active': isActive });

  const handleBurgerButtonIsActive = ({ isActive }: {isActive: boolean}) =>
    classNames('burger__button', { 'burger__button--is-active': isActive });


  return (
    <aside
      id="burgerMenu"
      className={`burger__menu burger__preAnimation  ${openBurger ? 'burger__animation' : ''}`}
    >
      <div className="burger__top">
        <div className="burger__logo">
          <LogoLink />
        </div>

        <button
          type='button'
          onClick={() => {
            setCloseBurger(false);
          }}
          className="burger__close">
          <img src="./logos/close.svg" alt="layoutLogo" />
        </button>
      </div>

      <div className="burger__main">
        <ul className="burger__nav__list">
          <li className="burger__list__item">
            <NavLink
              to="/"
              onClick={() => {
                setCurrentURL('/');
                setCloseBurger(false);
              }}
              className={handleBurgerLinkIsActive}
            >
              Home
            </NavLink>
          </li>
          <li className="burger__list__item">
            <NavLink
              to="catalog/phones"
              onClick={() => {
                setCurrentURL('catalog/phones');
                setCloseBurger(false);
              }}
              className={handleBurgerLinkIsActive}
            >
              Phones
            </NavLink>
          </li>
          <li className="burger__list__item">
            <NavLink
              to="catalog/tablets"
              onClick={() => {
                setCurrentURL('catalog/tablets');
                setCloseBurger(false);
              }}
              className={handleBurgerLinkIsActive}
            >
              Tablets
            </NavLink>
          </li>
          <li className="burger__list__item">
            <NavLink
              to="catalog/accessories"
              onClick={() => {
                setCurrentURL('catalog/accessories');
                setCloseBurger(false);
              }}
              className={handleBurgerLinkIsActive}
            >
              Accessories
            </NavLink>
          </li>
        </ul>

        <div className="burger__buttons">
          <NavLink
            onClick={() => {
              setCurrentURL('favourites');
              setCloseBurger(false);
            }}
            to="favourites"
            className={handleBurgerButtonIsActive}
          >
            { currentURL !== 'favourites' ? <img
              src="./logos/favourites.svg"
              alt="logoFavourite"
            />
              : <img
                src="./logos/favourites-selected.svg"
                alt="logoFavouriteSelected"
              />}
          </NavLink>

          <NavLink
            onClick={() => {
              setCurrentURL('cart');
              setCloseBurger(false);
            }}
            to="cart"
            className={handleBurgerButtonIsActive}
          >
            <img src="./logos/shopping-bag.svg" alt="logoShoppingBag" />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
