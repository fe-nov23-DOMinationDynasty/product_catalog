/* eslint-disable max-len */
import React from 'react';
import cn from 'classnames';

import './CharacteristicsBlock.scss';

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
      <span className="title small-text">{title}</span>
      <span className="subtitle small-text">{subtitle}</span>
    </div>
    <div className="characteristic-block__content">
      {options.map(option => (
        <div
          className={cn('characteristic-block__item-wrapper', {
            'characteristic-block__item-wrapper--selected': selectedOption === option && !isColorPicker,
            'characteristic-block__item-wrapper--color-picker': isColorPicker,
            'characteristic-block__item-wrapper--color-picker--selected': isColorPicker && selectedOption === option
          })}
          key={option}
        >
          <button
            onClick={() => onSelected(option)}
            type='button'
            style={{
              backgroundColor: isColorPicker ? option : 'transparent'
            }}
            className={cn('characteristic-block__item', {
              'characteristic-block__item--color-picker': isColorPicker,
            })}>
            {isColorPicker ? '' : option}
          </button>
        </div>
      ))}
    </div>
  </article>
);
