import classNames from 'classnames';

export const handleNavigationIsActive = ({ isActive }: {isActive: boolean}) =>
  classNames('nav_link', { 'is-active': isActive });

export const handleHeaderButtonIsActive = ({ isActive }: {isActive: boolean}) =>
  classNames('header__button', { 'header__button--is-active': isActive });
