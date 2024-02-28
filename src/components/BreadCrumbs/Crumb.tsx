import { Link } from 'react-router-dom';
import cn from 'classnames';

import './BreadCrumbs.scss';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Theme } from '../../enums/Theme';

type Props = {
  location: string;
};

export const Crumb: React.FC<Props> = ({ location }) => {
  let currentLink = '';
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;


  return (
    location.split('/')
      .filter((crumb) => crumb !== '' && !+crumb)
      .map((crumb) => {
        currentLink += `/${crumb}`;

        return (
          <>
            <div
              className={cn('bread-crumbs__crumb bread-crumbs__arrow', {
                'bread-crumbs__arrow--dark': isDark,
              })}
            />

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
