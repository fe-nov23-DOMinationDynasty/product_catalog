import { Link } from 'react-router-dom';
import './BreadCrumbs.scss';
import React from 'react';

type Props = {
  location: string;
};

export const Crumb:React.FC<Props> = ({ location }) => {
  let currentLink = '';

  return (
    location.split('/')
      .filter((crumb) => crumb !== '' && !+crumb)
      .map((crumb) => {
        currentLink += `/${crumb}`;

        return (
          <>
            <div className="bread-crumbs__crumb bread-crumbs__arrow" />
            <div className="bread-crumbs__crumb" key={crumb}>
              <Link className="bread-crumbs__link" to={currentLink}>
                {crumb}
              </Link>
            </div>
          </>
        );
      })
  );
};
