/* eslint-disable no-plusplus */
import React from 'react';
import cn from 'classnames';
import '../../styles/blocks/button.scss';
import './Pagination.scss';
import { SearchLink } from '../SearchLink';
import { getPaginationPages } from '../../services/getPaginationPages';
import { useAppSelector } from '../../app/hooks';
import { Theme } from '../../enums/Theme';

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
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;

  return (
    <section className="pagination">
      <SearchLink
        params={{ page: currentPageNumber === 2 ? null : `${currentPageNumber - 1}` }}
        className={cn('button button--arrow-left', {
          'button--disabled button--arrow-left--disabled':
            currentPageNumber === 1,
          'button--disabled--dark button--arrow-left--disabled--dark':
            currentPageNumber === 1 && isDark,
          'button--dark button--arrow-left--dark': isDark,
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
                'button--dark pagination__item--dark': isDark,
                // eslint-disable-next-line max-len
                'pagination__item--selected--dark': pageNumber === currentPageNumber && isDark,
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
          'button--disabled--dark button--arrow-right--disabled--dark':
            currentPageNumber === amountOfPages && isDark,
          'button--dark button--arrow-right--dark': isDark,
        })}
      />
    </section>
  );
};


