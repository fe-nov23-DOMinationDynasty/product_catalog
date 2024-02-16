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
        <div className="card__param-pair">
          <p className="card__params-info">Screen</p>
          <p className="card__params-value">6.1” OLED</p>
        </div>

        <div className="card__param-pair">
          <p className="card__params-info">Capacity</p>
          <p className="card__params-value">128 GB</p>
        </div>

        <div className="card__param-pair">
          <p className="card__params-info">RAM</p>
          <p className="card__params-value">6 GB</p>
        </div>
      </div>

      <div className="card__buttons">
        <a href="#addToCart" className="card__buttons-add">
          Add to cart
        </a>

        <a href="#favourite" className="card__buttons-favourite">
          <img
            src="./icons/buttons/icon-add-favourites.png"
            alt="icon-favourite"
            className="card__icon-favourite"
          />
        </a>
      </div>
    </article>
  );
};
