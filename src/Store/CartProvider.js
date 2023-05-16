import React, { useReducer, useEffect } from "react";
import CartContext from "./cart-context";
const defaultCartState = {
  items: JSON.parse(localStorage.getItem("ItemsArray")) || [],
  totalAmount: 0,
  totalItems: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // const updatedAmount =
    //   state.totalAmount + action.item.amount * action.item.price;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    // const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      // totalAmount: updatedAmount,
    };
  }
  if (action.type === "ADD_UNIT") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      // const updatedItems = state.items.concat(action.item);

      return {
        items: updatedItems,
        // totalAmount: updatedAmount,
      };
    }
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems = [...state.items];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      if (updatedItem.amount < 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      // const updatedItems = state.items.concat(action.item);

      return {
        items: updatedItems,
        // totalAmount: updatedAmount,
      };
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  useEffect(() => {
    localStorage.setItem("ItemsArray", JSON.stringify(cartState.items));
  }, [cartState.items]);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (item) => {
    dispatchCartAction({
      type: "REMOVE",
      item: item,
    });
  };

  const addUnittoCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_UNIT",
      item: item,
    });
  };

  const removeUnitFromCartHandler = (item) => {
    dispatchCartAction({
      type: "REMOVE_UNIT",
      item: item,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    addUnit: addUnittoCartHandler,
    removeUnit: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
