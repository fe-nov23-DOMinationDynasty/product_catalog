import { NavLink } from 'react-router-dom';
import '../Header/header.scss';

export const IconLogo = () => (
  <NavLink to="/" className="logo_link">
    <img src="./logos/main-logo.svg" alt="layoutLogo" className="logo_img" />
  </NavLink>
);
