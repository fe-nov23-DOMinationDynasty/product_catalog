import { CartItem } from '../components/CartItem';

export const CartPage = () => {
  return (
    <div className="wrapper">
      <h1 className="cart__title">Cart</h1>

      <CartItem />
    </div>
  );
};
