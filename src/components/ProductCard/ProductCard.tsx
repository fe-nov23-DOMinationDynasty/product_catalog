/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './productcard.scss';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone;
};

export const ProductCard: React.FC<Props> = ({ phone }) => {
  return (
    <article className="card" key={phone.id}>
      <img
        src={`../${phone.images[0]}`}
        alt="Iphone 14 Midnight"
        className="card__image"
      />

      <h2 className="card__title">
        {phone.name} (MQ023)
      </h2>

      <p className="card__price-value">${phone.priceDiscount}</p>

      <div className="card__params">
        <p className="card__param-pair">
          <span className="card__params-info">Screen</span>
          <span className="card__params-value">{phone.screen}</span>
        </p>

        <p className="card__param-pair">
          <span className="card__params-info">Capacity</span>
          <span className="card__params-value">{phone.capacity}</span>
        </p>

        <p className="card__param-pair">
          <span className="card__params-info">RAM</span>
          <span className="card__params-value">{phone.ram}</span>
        </p>
      </div>

      <div className="card__button">
        <button type="button" className="button button--add">
          Add to cart
        </button>

        <button type="button" className="button button--favourite" />
      </div>
    </article>
  );
};
