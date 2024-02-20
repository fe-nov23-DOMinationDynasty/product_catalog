/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Product } from '../../types/Product';
import './cartItem.scss';

interface Props {
  item: Product;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const CartItem: React.FC<Props> = ({
  item,
  quantity,
  setQuantity,
}) => {
  const {
    name,
    image,
    price,
  } = item;

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <article className="cart-item">
      <div className="cart-item__info">
        <button type="button" className="cart-item__delete">
          <img
            src="./icons/close.svg"
            className="cart-item__delete-icon"
            alt="close-icon"
          />
        </button>

        <img
          src={image}
          alt="iphone-model"
          className="cart-item__image"
        />

        <p className="cart-item__about">
          {name}
        </p>
      </div>

      <div className="cart-item__cost">
        <div className="cart-item__counter">
          <button
            type="button"
            className="button button--minus--disabled button--minus"
            disabled={quantity === 1}
            onClick={handleDecrement}
          />

          <p className="cart-item__count">{quantity}</p>

          <button
            type="button"
            className="button button--plus"
            onClick={handleIncrement}
          />
        </div>

        <p className="cart-item__price h3">${price * quantity}</p>
      </div>
    </article>
  );
};
