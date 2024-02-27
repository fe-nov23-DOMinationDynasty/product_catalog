import classNames from 'classnames';

export const handleBurgerLinkIsActive = (
  { isActive }: { isActive: boolean }
) =>
  classNames('burger__nav__link', { 'burger__is--active': isActive });

export const handleBurgerButtonIsActive = (
  { isActive }: { isActive: boolean }
) =>
  classNames('burger__button', { 'burger__button--is-active': isActive });
