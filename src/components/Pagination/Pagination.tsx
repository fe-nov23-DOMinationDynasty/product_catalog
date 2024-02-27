/* eslint-disable no-plusplus */
import React from 'react';
import cn from 'classnames';
import '../../styles/blocks/button.scss';
import './Pagination.scss';
import { SearchLink } from '../SearchLink';
import { getPaginationPages } from '../../services/getPaginationPages';

interface Props {
  amountOfPages: number;
  currentPageNumber: number;
}

const amountOfVisiblePages = 4;
const startPageIndex = 0;

export const Pagination: React.FC<Props> = ({
  amountOfPages,
  currentPageNumber,
}) => {
  const pages = getPaginationPages(
    currentPageNumber,
    amountOfPages,
    amountOfVisiblePages
  );

  return (
    <section className="pagination">
      <SearchLink
        params={{ page: currentPageNumber === 2 ? null : `${currentPageNumber - 1}` }}
        className={cn('button button--arrow-left', {
          'button--disabled button--arrow-left--disabled':
            currentPageNumber === 1,
        })}
      />

      <ul className="pagination__list">
        {pages.map((pageNumber) => {
          const pageIndex = pageNumber - 1;

          return (
            <SearchLink
              key={pageNumber}
              params={{
                page: pageIndex === startPageIndex
                  ? null
                  : `${pageIndex + 1}`
              }}
              className={cn('button pagination__item', {
                'pagination__item--selected': pageNumber === currentPageNumber,
              })}
            >
              {pageNumber}
            </SearchLink>
          );
        })}
      </ul>

      <SearchLink
        params={{ page: `${currentPageNumber + 1}` }}
        className={cn('button button--arrow-right', {
          'button--disabled button--arrow-right--disabled':
            currentPageNumber === amountOfPages,
        })}
      />
    </section>
  );
};


