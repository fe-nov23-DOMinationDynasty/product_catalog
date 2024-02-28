import React from 'react';
import './Icon.scss';

interface Props {
  pathImage: string;
  counter: number;
}

export const Icon: React.FC<Props> = ({ pathImage, counter }) => (
  <div className="icon-wrapper">
    <button type="button" className="icon">
      <img src={pathImage} alt="Icon" className="icon__image" />
    </button>
    <span className="icon__counter">{counter}</span>
  </div>
);
