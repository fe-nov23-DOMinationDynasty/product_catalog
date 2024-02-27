import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';
import { Crumb } from './Crumb';

export const BreadCrumbs: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bread-crumbs">
      <Link className="bread-crumbs__crumb bread-crumbs__home" to="/" />
      <Crumb location={location.pathname} />
    </div>
  );
};
