import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
  const exixtingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  );
  if (exixtingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => { 
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  };
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const CART_ITEM_ACTION_TYPING = {
  SET_CART_ITEM: 'SET_CART_ITEM',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartItemReduce = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ITEM_ACTION_TYPING.SET_CART_ITEM:
      return {
        ...state,
        ...payload,
      };
    case CART_ITEM_ACTION_TYPING.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled in Type ${type} in userReducer`);
  }
} 

export const CartProvider = ({ children }) => {

  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] = useReducer(cartItemReduce, INITIAL_STATE);

  const updateCartItemsReduce = (newCartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    );

    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0,
    );

    dispatch(
      createAction(CART_ITEM_ACTION_TYPING.SET_CART_ITEM, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ITEM_ACTION_TYPING.SET_IS_CART_OPEN, bool));
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReduce(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReduce(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReduce(newCartItems);
  };


  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};