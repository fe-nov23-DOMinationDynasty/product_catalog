import '../../constants/constants.scss';
import './header.scss';
import { IconLogo } from '../IconLogo';


export const Header = () => (
  <header className='header'>
    <nav className='nav'>
      <div className='nav_menu_start'>
        <IconLogo />

        <ul className='nav_list'>
          <li className='list_item'>
            <a href="#/" className='nav_link is-active'>
            Home
            </a>
          </li>
          <li className='list_item'>
            <a href="#/" className='nav_link'>
            Phones
            </a>
          </li>
          <li className='list_item'>
            <a href="#/" className='nav_link'>
            Tablets
            </a>
          </li>
          <li className='list_item'>
            <a href="#/" className='nav_link'>
            Accessories
            </a>
          </li>
        </ul>

      </div>

      <div className='buttons_block'>

        <a href="#/" className='button button_link'>
          <img
            src="./logos/Favourites (Heart Like).svg"
            alt="logoFavourite"
          />
        </a>

        <a href="#/" className='button button_link'>
          <img
            src="./logos/Shopping bag (Cart).svg"
            alt="logoShoppingBag"
          />
        </a>
      </div>
    </nav>
  </header>
);
