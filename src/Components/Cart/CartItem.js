import classes from "./CartItem.module.css";
// import DataFetching from "../../DataFetching/DataFetching";

const CartItem = (props) => {
  const price = +props.price;
  // price = `$${props.price.toFixed(2)}`;

  const amount = +props.amount;
  let totalPrice = price * amount;
  totalPrice = totalPrice.toFixed(1);

  // const comingDataHandler = (items)=>{

  //}

  return (
    <li className={classes["cart-item"]}>
      <div>
        <p>{props.name}</p>

        <div className={classes.summary}>
          <div className={classes.price}>Unit Price: {price}</div>
          <span className={classes.amount}>Total Units: {amount}</span>
          <span className={classes.price}>Total Price: {totalPrice}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
