import React from 'react';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';
import { Crumb } from './Crumb';
import { useAppSelector } from '../../app/hooks';
import { Theme } from '../../enums/Theme';

export const BreadCrumbs: React.FC = () => {
  const location = useLocation();
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;

  return (
    <div className="bread-crumbs">
      <Link
        className={cn('bread-crumbs__crumb bread-crumbs__home', {
          'bread-crumbs__home--dark': isDark,
        })}
        to="/"
      />

      <Crumb location={location.pathname} />
    </div>
  );
};
