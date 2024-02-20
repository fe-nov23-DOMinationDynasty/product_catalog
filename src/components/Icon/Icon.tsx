import React from 'react';
import './icon.scss';

interface Props {
  pathImage: string;
  counter: number;
}

export const Icon: React.FC<Props> = ({ pathImage, counter }) => {
  return (
    <div className="wrapper">
      <button type="button" className="icon">
        <img src={pathImage} alt="Icon" className="icon__image" />
      </button>

      <span className="icon__counter">{counter}</span>
    </div>
  );
};
