import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalItems = cartCtx.items.length;

  let totalAmount = cartCtx.items.reduce((initialTotal, item) => {
    return initialTotal + item.price * item.amount;
  }, 0);
  totalAmount = totalAmount.toFixed(2);

  // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeItemFromCart = (item) => {
    cartCtx.removeItem(item);

    console.log(`remove item clicked`);
  };
  const addItemToCart = (item) => {
    cartCtx.addItem(item);
    console.log(`add Item to cart clicked`);
  };

  const addUnitToCart = (item) => {
    cartCtx.addUnitToCart(item);
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeItemFromCart.bind(null, item)}
          onAdd={addItemToCart.bind(null, item)}
          onAddUnit={addUnitToCart.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Items</span>
        <span>{totalItems}</span>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <Button onClick={props.onHideCart}>Close</Button>
        {hasItems && <Button className={classes.button}>Order</Button>}
      </div>
    </Modal>
  );
};
export default Cart;
