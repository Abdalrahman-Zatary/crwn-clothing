import { createContext, useState } from 'react';

const addCartItem = (cartItem, productToAdd) => {
  // find if cartItems contains productToAdd
  const exixtingCartItem = cartItem.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (exixtingCartItem) {
    return cartItem.map((cartItem) => 
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems/new cart item
  return [...cartItem, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItem, productToAdd));
  }


  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItem };

  return (
    <CartContext.Provider value={value}>{ children }</CartContext.Provider>
  );
};