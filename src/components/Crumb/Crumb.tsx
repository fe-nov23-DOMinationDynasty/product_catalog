import React from 'react';
import { Link } from 'react-router-dom';
import '../BreadCrumbs/BreadCrumbs.scss';

interface Props {
  location: string,
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const Crumb: React.FC<Props> = ({ location }) => {
  let currentLink = '';

  return (
    location.split('/')
      .filter((crumb) => crumb !== '' && !+crumb)
      .map((crumb) => {
        currentLink += `/${crumb}`;

        return (
          <React.Fragment key={crumb}>
            <div className="bread-crumbs__crumb bread-crumbs__arrow" />
            <div className="bread-crumbs__crumb" key={crumb}>
              <Link className="bread-crumbs__link" to={currentLink}>
                {crumb.replace(/-/g, ' ')}
              </Link>
            </div>
          </React.Fragment>
        );
      })
  );
};
