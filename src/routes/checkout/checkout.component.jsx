import { useContext } from 'react';

import './checkout.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {
        cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;

          return (
            <div key={id}>
              <h2>{name}</h2>
              <p>{quantity}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default Checkout;
