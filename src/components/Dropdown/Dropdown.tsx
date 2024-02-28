/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef, useState } from 'react';
import cn from 'classnames';
import './Dropdown.scss';
import { useAppSelector } from '../../app/hooks';
import { Theme } from '../../enums/Theme';

interface Props {
  onSelected: (option: string) => void;
  selectedOption: string;
  options: string[];
}

const dropdownOptionClass = 'dropdown__option';

export const Dropdown: React.FC<Props> = ({
  options,
  selectedOption,
  onSelected,
}) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const triggerButton = useRef<HTMLButtonElement>(null);
  const isDark = useAppSelector(state => state.themeReducer) === Theme.Dark;


  const handleSelect = (option: string) => {
    onSelected(option);
    setIsDropdownOpened(false);
  };

  const handleTriggerButtonClicked = () => {
    setIsDropdownOpened(!isDropdownOpened);

    if (isDropdownOpened) {
      triggerButton.current?.blur();
    }
  };

  const handleTriggerButtonBlur = (
    event: React.FocusEvent<HTMLButtonElement, Element>
  ) => {
    if (event.relatedTarget?.className !== dropdownOptionClass) {
      setIsDropdownOpened(false);
    }
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        ref={triggerButton}
        className={cn('dropdown__trigger', {
          'dropdown__trigger--dark': isDark,
        })}
        onClick={handleTriggerButtonClicked}
        onBlur={handleTriggerButtonBlur}>
        {selectedOption || 'Select option'}
      </button>

      <div
        className={cn('dropdown__menu', {
          'dropdown__menu--active': isDropdownOpened,
          'dropdown__menu--active--dark': isDropdownOpened && isDark,
        })}>
        <ul className="dropdown__list">
          {options.map((option) => (
            <li
              className={cn('dropdown__item', {
                'dropdown__item--selected': selectedOption === option,
              })}
              key={option}
            >
              <button
                type="button"
                className={dropdownOptionClass}
                onClick={() => handleSelect(option)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
