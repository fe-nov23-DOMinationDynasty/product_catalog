/* eslint-disable max-len */
import React from 'react';
import cn from 'classnames';

import './CharacteristicsBlock.scss';
import { getColorByName } from '../../services/getColorByName';

interface Props {
  onSelected: (options: string) => void,
  title: string,
  subtitle?: string,
  isColorPicker?: boolean,
  options: string[],
  selectedOption: string,
}

export const CharacteristicsBlock: React.FC<Props> = ({
  onSelected,
  title,
  subtitle,
  isColorPicker,
  options,
  selectedOption,
}) => (
  <article className="characteristic-block">
    <div className="characteristic-block__info">
      <span className="characteristic-block__title small-text">{title}</span>
      <span className="characteristic-block__subtitle small-text">{subtitle}</span>
    </div>
    <div className="characteristic-block__content">
      {options.map(option => (
        <div
          className={cn('color-selector', {
            'color-selector--selected': selectedOption === option && !isColorPicker,
            'color-selector--color-picker': isColorPicker,
            'color-selector--color-picker-selected': isColorPicker && selectedOption === option
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
            className={cn('color-selector__item', {
              'color-selector__item--color-picker': isColorPicker,
            })}
          >
            {isColorPicker ? '' : option}
          </button>
        </div>
      ))}
    </div>
  </article>
);
