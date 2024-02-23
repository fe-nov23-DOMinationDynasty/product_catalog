import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';

export const BreadCrumbs: React.FC = () => {
  const location = useLocation();

  let currentLink = '';
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '' && !+crumb)
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <>
          <div className="bread-crumbs__crumb bread-crumbs__arrow" />
          <div className="bread-crumbs__crumb" key={crumb}>
            {/* {crumb!=='catalog' && ( */}
            <Link className="bread-crumbs__link" to={currentLink}>
              {crumb}
            </Link>
            {/* )} */}
          </div>
        </>
      );
    });

  return (
    <div className="bread-crumbs">
      <Link className="bread-crumbs__crumb bread-crumbs__home" to="/" />
      {crumbs}
    </div>
  );
};
