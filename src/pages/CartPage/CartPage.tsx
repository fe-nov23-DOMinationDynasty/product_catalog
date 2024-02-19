import { BackButton } from '../../components/BackButton';
import { CartItem } from '../../components/CartItem';
import '../../styles/blocks/container.scss';

export const CartPage = () => {
  return (
    <div className="cart">
      <BackButton />
      
      <CartItem />
    </div>
  );
};
