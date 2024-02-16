/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './cardphone.scss';

export const CardPhone: React.FC = () => {
  return (
    <article className="card">
      <img
        src="../img/phones/apple-iphone-14-pro/spaceblack/00.webp"
        alt="Iphone 14 Midnight"
        className="card__image"
      />

      <h2 className="card__title">
        Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)
      </h2>

      <p className="card__price-value">$999</p>

      <div className="card__params">
        <p className="card__param-pair">
          <span className="card__params-info">Screen</span>
          <span className="card__params-value">6.1” OLED</span>
        </p>

        <p className="card__param-pair">
          <span className="card__params-info">Capacity</span>
          <span className="card__params-value">128 GB</span>
        </p>

        <p className="card__param-pair">
          <span className="card__params-info">RAM</span>
          <span className="card__params-value">6 GB</span>
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
