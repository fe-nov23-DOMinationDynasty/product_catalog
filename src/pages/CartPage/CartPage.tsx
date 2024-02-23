import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions as cartActions } from '../../features/cartSlice';

import { BackButton } from '../../components/BackButton';
import { CartItem } from '../../components/CartItem';
import { CheckoutModal } from '../../components/CheckoutModal';

import { useAppSelector } from '../../app/hooks';

import './cartPage.scss';
import '../../styles/blocks/button.scss';
import '../../styles/utils/text-styles.scss';

export const CartPage = () => {
  const dispatch = useDispatch();
  const products = useAppSelector((state) => state.cartReducer);

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const totalCost = products.cartItems.reduce(
    (total, { product }) => total + product.price * products.totalAmount,
    0
  );

  const totalQuantity = products.cartItems.reduce(
    (total, { amount }) => total + amount,
    0
  );

  const handleCheckout = () => {
    dispatch(cartActions.resetCart());

    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      navigate('..');
    }, 2000);
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__back-button">
          <BackButton />
        </div>

        <h1 className="cart__title h1">Cart</h1>
      </div>

      <div className="cart__items">
        {products.cartItems.map(({ product, amount }) =>
          product ? (
            <CartItem
              key={product.itemId}
              product={product}
              quantity={amount}
            />
          ) : null
        )}
      </div>

      {!!totalQuantity && (
        <article className="total">
          <div className="total__info">
            <h2 className="total__price">${totalCost}</h2>
            <div className="total__count-items">
              Total for {totalQuantity} items
            </div>
          </div>

          <span className="total__line" />

          <button
            type="button"
            className="button button-add button--cart"
            onClick={handleCheckout}>
            Checkout
          </button>
        </article>
      )}

      {showModal && <CheckoutModal />}
    </div>
  );
};
