/* eslint-disable max-len */
import React from 'react';
import cn from 'classnames';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

import './CharacteristicsBlock.scss';
import { getColorByName } from '../../services/getColorByName';
import { getMockArray } from '../../services/getMockArray';
import { useAppSelector } from '../../app/hooks';
import { Theme } from '../../enums/Theme';

interface Props {
  onSelected: (options: string) => void,
  title: string,
  subtitle?: string | null,
  withSubtitle?: boolean,
  isColorPicker?: boolean,
  options: string[] | null,
  selectedOption: string | null,
}

const amountOfOptionSkeletons = 3;

export const CharacteristicsBlock: React.FC<Props> = ({
  onSelected,
  title,
  subtitle,
  isColorPicker,
  options,
  selectedOption,
  withSubtitle,
}) => {
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;

  return (
    <article className="characteristic-block">
      <div className={cn('characteristic-block__info', {
        'characteristic-block__info--dark': isDark,
      })}>
        <span className="characteristic-block__title small-text">{title}</span>
        {withSubtitle && (
          <span className="characteristic-block__subtitle small-text">
            {options ? `ID: ${subtitle}` : <Skeleton className='characteristic-block__subtitle-skeleton' />}
          </span>
        )}
      </div>
      <div className="characteristic-block__content">
        {options
          ? options.map(option => (
            <div
              className={cn('selector', {
                'selector--dark': isDark,
                'selector--selected': selectedOption === option && !isColorPicker,
                'selector--selected--dark': selectedOption === option && !isColorPicker && isDark,
                'selector--color-picker': isColorPicker,
                'selector--color-picker--dark': isColorPicker && isDark,
                'selector--color-picker--selected': isColorPicker && selectedOption === option
              })}
              key={option}
            >
              <button
                onClick={() => onSelected(option)}
                type='button'
                style={{
                  backgroundColor: isColorPicker
                    ? getColorByName(option)
                    : 'transparent'
                }}
                className={cn('selector__item', {
                  'selector__item--color-picker': isColorPicker,
                })}
              >
                {isColorPicker ? '' : option}
              </button>
            </div>
          ))
          : (
            getMockArray(amountOfOptionSkeletons)
              .map((item, index) => (
                <div
                  key={item || index}
                  className={cn('characteristic-block__skeleton-wrapper', {
                    'characteristic-block__skeleton-wrapper--round': isColorPicker
                  })}
                >
                  <Skeleton
                    className="characteristic-block__skeleton"
                    circle={isColorPicker}
                  />
                </div>
              ))
          )}
      </div>
    </article>
  );
};
