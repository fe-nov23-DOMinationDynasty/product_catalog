import { Link } from 'react-router-dom';
import './logoLink.scss';

export const LogoLink = () => (
  <Link to="/" className="logo">
    <img
      src="./logos/main-logo.svg"
      alt="nice-gadgets-logo"
      className="logo__img"
    />
  </Link>
);