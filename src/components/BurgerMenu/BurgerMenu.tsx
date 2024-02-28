import '../Header/header.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { LogoLink } from '../LogoLink';
import { handleIsActive } from '../Header/utils';


type Props = {
  openBurger: boolean
  setCloseBurger: (state: boolean) => void;
  location: string
};

export const BurgerMenu: React.FC<Props> = ({
  openBurger,
  setCloseBurger,
  location
}) => {
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
      className={`burger_menu burger_menu--pre-animation
       ${openBurger ? 'burger_menu--animation' : ''}`}
    >
      <div className="burger_menu__top">
        <div className="burger_menu__logo">
          <LogoLink />
        </div>

        <button
          type='button'
          onClick={() => {
            setCloseBurger(false);
          }}
          className="burger_menu__close">
          <img src="./logos/close.svg" alt="layoutLogo" />
        </button>
      </div>

      <div className="burger_menu__main">
        <ul className="burger_menu__nav_list">
          <li className="burger_menu__list_item">
            <NavLink
              to="/"
              onClick={() => {
                setCloseBurger(false);
              }}
              className={
                handleIsActive(
                  'burger_menu__nav_link', 'burger_menu--is-active'
                )
              }
            >
              Home
            </NavLink>
          </li>
          <li className="burger_menu__list_item">
            <NavLink
              to="catalog/phones"
              onClick={() => {
                setCloseBurger(false);
              }}
              className={
                handleIsActive(
                  'burger_menu__nav_link', 'burger_menu--is-active'
                )
              }
            >
              Phones
            </NavLink>
          </li>
          <li className="burger_menu__list_item">
            <NavLink
              to="catalog/tablets"
              onClick={() => {
                setCloseBurger(false);
              }}
              className={
                handleIsActive(
                  'burger_menu__nav_link', 'burger_menu--is-active'
                )
              }
            >
              Tablets
            </NavLink>
          </li>
          <li className="burger_menu__list_item">
            <NavLink
              to="catalog/accessories"
              onClick={() => {
                setCloseBurger(false);
              }}
              className={
                handleIsActive(
                  'burger_menu__nav_link', 'burger_menu--is-active'
                )
              }
            >
              Accessories
            </NavLink>
          </li>
        </ul>

        <div className="burger_menu__buttons">
          <NavLink
            onClick={() => {
              setCloseBurger(false);
            }}
            to="favourites"
            className={
              handleIsActive(
                'burger_menu__button', 'burger_menu__button--is-active'
              )
            }
          >
            <img
              src={location !== '/favourites'
                ? "./logos/favourites.svg"
                : "./logos/favourites-selected.svg"}
              alt="logoFavourite" />
          </NavLink>

          <NavLink
            onClick={() => {
              setCloseBurger(false);
            }}
            to="cart"
            className={
              handleIsActive(
                'burger_menu__button', 'burger_menu__button--is-active'
              )
            }
          >
            <img src="./logos/shopping-bag.svg" alt="logoShoppingBag" />
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
