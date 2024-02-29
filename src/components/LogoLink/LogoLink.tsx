import { Link } from 'react-router-dom';
import './LogoLink.scss';
import { useAppSelector } from '../../app/hooks';
import { Theme } from '../../enums/Theme';

export const LogoLink = () => {
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;

  return (
    <Link to="/" className="logo">
      <img
        src={isDark ? './logos/main-logo-dark.svg' : './logos/main-logo.svg'}
        alt="nice-gadgets-logo"
        className="logo__img"
      />
    </Link>
  );
};
