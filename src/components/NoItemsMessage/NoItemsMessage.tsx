import React from 'react';
import './NoItemsMessage.scss';

interface Props {
  message: string,
}

export const NoItemsMessage: React.FC<Props> = ({ message }) => (
  <div className="no-items-message">
    <img
      src="./img/no-items-image.webp"
      alt="noItemsPicture"
      className="no-items-message__image"
    />
    <p className="no-items-message__info h1">
      {message}
    </p>
  </div>
);
