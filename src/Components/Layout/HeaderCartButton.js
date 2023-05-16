import React from "react";

import classes from "./HeaderCartButton.module.css";
import Button from "../UI/Button";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  // const numberOfCartItems = CartCtx.items.reduce((currentNumber, item) => {
  //   return currentNumber + item.amount;
  // }, 0);

  // let totalPriceOfCartItems = CartCtx.items.reduce((currentNumber, item) => {
  //   return currentNumber + item.price;
  // }, 0);
  // totalPriceOfCartItems = totalPriceOfCartItems * numberOfCartItems;
  const totalItems = cartCtx.items.length;

  let totalAmount = cartCtx.items.reduce((initialTotal, item) => {
    return initialTotal + item.price * item.amount;
  }, 0);
  totalAmount = totalAmount.toFixed(2);

  return (
    <Button onClick={props.onClick}>
      <h2 className={classes.h2}>Cart</h2>
      <p>Items: {totalItems}</p>
      <p>total: $ {totalAmount}</p>
    </Button>
  );
};
export default HeaderCartButton;
