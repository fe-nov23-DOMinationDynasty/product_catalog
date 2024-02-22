import React from 'react';
import cn from 'classnames';
import '../../styles/blocks/button.scss';
import './Pagination.scss';
import { SearchLink } from '../SearchLink';

interface Props {
  amountOfPages: number;
  currentPageIndex: number;
}

export const Pagination: React.FC<Props> = ({
  amountOfPages,
  currentPageIndex,
}) => {
  let startPage = Math.max(currentPageIndex - 1, 0);
  const endPage = Math.min(startPage + 3, amountOfPages - 1);

  if (endPage - startPage < 3) {
    startPage = Math.max(endPage - 3, 0);
  }

  return (
    <section className="pagination">
      <SearchLink
        params={{ page: currentPageIndex === 1 ? null : `${currentPageIndex}` }}
        className={cn('button button--arrow-left', {
          'button--disabled button--arrow-left--disabled':
            currentPageIndex === 0,
        })}
      />

      <ul className="pagination__list">
        {Array.from(Array(4).keys()).map((_, index) => {
          const pageIndex = startPage + index;

          return (
            <SearchLink
              key={pageIndex}
              params={{ page: pageIndex === 0 ? null : `${pageIndex + 1}` }}
              className={cn('button pagination__item', {
                'pagination__item--selected': pageIndex === currentPageIndex,
              })}
            >
              {pageIndex + 1}
            </SearchLink>
          );
        })}
      </ul>

      <SearchLink
        params={{ page: `${currentPageIndex + 2}` }}
        className={cn('button button--arrow-right', {
          'button--disabled button--arrow-right--disabled':
            currentPageIndex === amountOfPages - 1,
        })}
      />
    </section>
  );
};


