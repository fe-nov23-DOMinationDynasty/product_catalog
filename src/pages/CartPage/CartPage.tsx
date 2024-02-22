import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { CartItem } from '../../components/CartItem';
import './cartPage.scss';
import '../../styles/blocks/button.scss';
import '../../styles/utils/text-styles.scss';
import { CheckoutModal } from '../../components/CheckoutModal';

export const CartPage = () => {
  const items = [
    {
      id: 72,
      category: 'phones',
      itemId: 'apple-iphone-14-128gb-midnight',
      name: 'Apple iPhone 14 128GB Midnight',
      fullPrice: 1056,
      price: 980,
      screen: "6.1' IPS",
      capacity: '32GB',
      color: 'midnight',
      ram: '6GB',
      year: 2022,
      image: 'img/phones/apple-iphone-14/midnight/00.webp',
    },
  ];

  const [quantity, setQuantity] = useState(items.length);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const totalCost = items.reduce(
    (total, item) => total + item.price * quantity,
    0
  );

  const handleCheckout = () => {
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
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ))}
      </div>

      <article className="total">
        <div className="total__info">
          <h2 className="total__price">${totalCost}</h2>
          <div className="total__count-items">Total for {quantity} items</div>
        </div>

        <span className="total__line" />

        <button
          type="button"
          className="button button-add button--cart"
          onClick={handleCheckout}>
          Checkout
        </button>
      </article>

      {showModal && <CheckoutModal />}
    </div>
  );
};
