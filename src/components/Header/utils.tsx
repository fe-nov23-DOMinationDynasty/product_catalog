import classNames from 'classnames';

export function handleIsActive(baseClass:string, classIsActive:string) {
  return ({ isActive }: {isActive: boolean}) =>
    classNames(baseClass, {
      [classIsActive]: isActive,
    });
}
