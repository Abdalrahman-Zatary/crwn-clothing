import { AnyAction } from 'redux-saga';

import { setCartItems, setIsCartOpen } from './cart.action';

import { CartItem } from './cart.types';

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

const CART_INITIAL_STATE : CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction) => {
  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload };
  }

  if (setCartItems.match(action)) {
    return { ...state, CartItems: action.payload };
  }

  return state;
};
