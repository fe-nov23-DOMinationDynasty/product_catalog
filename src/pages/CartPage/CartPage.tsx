import { CartItem } from '../../components/CartItem';
import { Footer } from '../../components/Footer';
import '../../styles/blocks/wrapper.scss';

export const CartPage = () => {
  return (
    <div className="wrapper">
      <CartItem />

      <Footer />
    </div>
  );
};
