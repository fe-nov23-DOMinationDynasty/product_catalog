import { BackButton } from '../../components/BackButton';
import { CartItem } from '../../components/CartItem';

import './cartPage.scss';
import '../../styles/blocks/button.scss';
import '../../styles/utils/text-styles.scss';

export const CartPage = () => {
  return (
    <div className="cart">
      <div className="cart__header">
        <div className="cart__back-button">
          <BackButton />
        </div>

        <h1 className="cart__title h1">
          Cart
        </h1>
      </div>

      <div className="cart__items">
        <CartItem />
        <CartItem />
      </div>

      <article className="total">
        <div className="total__info">
          <h2 className="total__price">$1337</h2>
          <div className="total__count-items">Total for 3 items</div>
        </div>

        <span className="total__line" />

        <button type="button" className="button button--add button--cart">
          Checkout
        </button>
      </article>

    </div>
  );
};
