import React, { useEffect } from "react";
const CartContext = React.createContext({
  items: [],

  // totalAmount: 100,
  addItem: (item) => {},
  removeItem: (item) => {},
  addUnit: (item) => {},
  // removeUnit: (id) => {},
});

export default CartContext;
