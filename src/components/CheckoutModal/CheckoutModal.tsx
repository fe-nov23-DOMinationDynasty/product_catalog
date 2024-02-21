import './CheckoutModal.scss';
import '../../styles/utils/text-styles.scss';

export const CheckoutModal = () => {
  return (
    <div className="checkout-modal">
      <div className="checkout-modal__content">
        <h2 className="h2">Checkout Successful!</h2>
        <p className="small-text">Thank you for your purchase.</p>
      </div>
    </div>
  );
};
