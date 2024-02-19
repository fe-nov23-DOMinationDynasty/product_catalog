import { BackButton } from '../../components/BackButton';
import { CartItem } from '../../components/CartItem';

import './cartPage.scss';
import '../../styles/blocks/button.scss';

export const CartPage = () => {
  return (
    <div className="cart">
      <div className="cart__back-button">
        <BackButton />
      </div>

      <h1 className="cart__title h1">
        Cart
      </h1>

      <article className="total">
        <div className="total__info">
          <div className="total__price">$1337</div>
          <div className="total__count-items">Total for 3 items</div>
        </div>

        <span className="total__line" />

        <button type="button" className="button">
          Checkout
        </button>
      </article>

      <CartItem />
    </div>
  );
};
