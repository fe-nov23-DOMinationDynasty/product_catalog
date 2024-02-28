import React from 'react';
import './NoItemsMessage.scss';

interface Props {
  message: string,
  image: string,
}

export const NoItemsMessage: React.FC<Props> = ({ message, image }) => (
  <div className="no-items-message">
    <img
      src={image}
      alt="noItemsPicture"
      className="no-items-message__image"
    />
    <p className="no-items-message__info h1">
      {message}
    </p>
  </div>
);
