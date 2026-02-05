import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const slectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItem
);

export const slectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [slectIsCartOpen],
  (cartItems) => cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity, 0)
);

export const slectCartTotal = createSelector(
  [slectCartItems],
  (cartItems) =>  cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
);