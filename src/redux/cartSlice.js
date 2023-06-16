import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemCart) {
        const tempCart = state.carts.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            let tempQuantity = cartItem.quantity + action.payload.quantity;
            let TempTotalPrice = cartItem.price * tempQuantity;
            return {
              ...cartItem,
              quantity: tempQuantity,
              totalPrice: TempTotalPrice,
            };
          }
          return cartItem;
        });
        state.carts = tempCart;
        storeInLocalStorage(tempCart);
        return;
      }
      state.carts.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      state.carts = tempCart;
      storeInLocalStorage(tempCart);
    },
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((total, cartItem) => {
        return (total += cartItem.price);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
