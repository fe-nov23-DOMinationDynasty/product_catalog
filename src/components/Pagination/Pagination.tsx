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
  return (
    <section className="pagination">
      <SearchLink
        params={{ page: currentPageIndex === 2 ? null : `${currentPageIndex}` }}
        className={cn('button button--arrow-left', {
          'button--disabled button--arrow-left--disabled':
            currentPageIndex === 0,
        })}
      />

      <ul className="pagination__list">
        {Array.from(Array(amountOfPages).keys()).map((_, index) => (
          <SearchLink
            key={_}
            params={{ page: index === 0 ? null : `${index + 1}` }}
            className={cn('button pagination__item', {
              'pagination__item--selected': index === currentPageIndex,
            })}>
            {index + 1}
          </SearchLink>
        ))}
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
