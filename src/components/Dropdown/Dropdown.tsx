/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef, useState } from 'react';
import cn from 'classnames';
import './Dropdown.scss';

interface Props {
  onSelected: (option: string) => void;
  selectedOption: string;
  options: string[];
}

export const Dropdown: React.FC<Props> = ({
  options,
  selectedOption,
  onSelected,
}) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const triggerButton = useRef<HTMLButtonElement>(null);

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
    if (event.relatedTarget?.className !== 'dropdown__option') {
      setIsDropdownOpened(false);
    }
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        ref={triggerButton}
        className="dropdown__trigger"
        onClick={handleTriggerButtonClicked}
        onBlur={handleTriggerButtonBlur}>
        {selectedOption}
      </button>

      <div
        className={cn('dropdown__menu', {
          'dropdown__menu--active': isDropdownOpened,
        })}>
        <ul className="dropdown__list">
          {options.map((option) => (
            <li className="dropdown__item">
              <button
                type="button"
                className="dropdown__option"
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
