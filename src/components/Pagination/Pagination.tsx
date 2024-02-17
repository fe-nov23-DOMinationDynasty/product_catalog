import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import '../../styles/blocks/button.scss';
import './Pagination.scss';

interface Props {
  amountOfPages: number;
  currentPageIndex: number;
}

export const Pagination: React.FC<Props> = ({
  amountOfPages,
  currentPageIndex,
}) => {
  return (
    <section className="pagination">
      <Link
        to={`../${currentPageIndex}`}
        className={cn('button button--arrow-left', {
          'button--disabled button--arrow-left--disabled':
            currentPageIndex === 0,
        })}
      />

      <ul className="pagination__list">
        {Array.from(Array(amountOfPages).keys()).map((_, index) => (
          <Link
            key={_}
            to={`../${index + 1}`}
            className={cn('button pagination__item', {
              'pagination__item--selected': index === currentPageIndex,
            })}>
            {index + 1}
          </Link>
        ))}
      </ul>

      <Link
        to={`../${currentPageIndex + 2}`}
        className={cn('button button--arrow-right', {
          'button--disabled button--arrow-right--disabled':
            currentPageIndex === amountOfPages - 1,
        })}
      />
    </section>
  );
};
