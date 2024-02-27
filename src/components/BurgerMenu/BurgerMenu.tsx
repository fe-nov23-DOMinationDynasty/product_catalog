// import { useState } from 'react';

import '../Header/header.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { LogoLink } from '../LogoLink';
import { handleBurgerButtonIsActive, handleBurgerLinkIsActive } from './utils';

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

  useEffect(() => {
    if (openBurger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openBurger]);

  return (
    <aside
      id="burgerMenu"
      className={`burger__menu burger__preAnimation
       ${openBurger ? 'burger__animation' : ''}`}
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
              className={handleBurgerLinkIsActive}>
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
              className={handleBurgerLinkIsActive}>
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
              className={handleBurgerLinkIsActive}>
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
              className={handleBurgerLinkIsActive}>
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
            <img
              src={currentURL !== 'favourites'
                ? "./logos/favourites.svg"
                : "./logos/favourites-selected.svg"}
              alt="logoFavourite" />
          </NavLink>

          <NavLink
            onClick={() => {
              setCurrentURL('cart');
              setCloseBurger(false);
            }}
            to="cart"
            className={handleBurgerButtonIsActive}>
            <img src="./logos/shopping-bag.svg" alt="logoShoppingBag" />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
