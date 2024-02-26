/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import cn from 'classnames';
import 'aos/dist/aos.css';
import Aos from 'aos';
import './cartItem.scss';
import { useAppDispatch } from '../../app/hooks';
import { actions as cartActions } from '../../features/cartSlice';
import { CartProduct } from '../../types/CartItem';
import { animDuration } from '../../styles/utils/AOS';

interface Props {
  product: CartProduct;
  quantity: number;
}

export const CartItem: React.FC<Props> = ({ product, quantity }) => {
  const { itemId, name, image, price } = product;
  const dispatch = useAppDispatch();


  useEffect(() => {
    Aos.init();
  }, []);

  const handleIncrement = () => {
    dispatch(cartActions.incrementAmount(itemId));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(cartActions.decrementAmount(itemId));
    }
  };

  const handleDelete = () => {
    dispatch(cartActions.delete(itemId));
  };

  return (
    <article
      className="cart-item"
      data-aos="fade-right"
      data-aos-duration={animDuration}
    >
      <div className="cart-item__info">
        <button
          type="button"
          className="cart-item__delete"
          onClick={handleDelete}>
          <img
            src="./icons/close.svg"
            className="cart-item__delete-icon"
            alt="close-icon"
          />
        </button>

        <img src={image} alt="iphone-model" className="cart-item__image" />

        <p className="cart-item__about">{name}</p>
      </div>

      <div className="cart-item__cost">
        <div className="cart-item__counter">
          <button
            type="button"
            className={cn('button button--minus', {
              'button--minus--disabled': quantity === 1,
            })}
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
