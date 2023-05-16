import React from "react";
import classes from "./Item.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
// import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

const Item = (props) => {
  const cartCtx = useContext(CartContext);

  //   const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount: 1,
      price: props.price,
    });
  };

  return (
    <Card>
      <div className={classes.image}>
        <img
          src={props.image}
          alt="image of product"
          className={classes.image}
        />
      </div>
      <h3 className={classes["item h3"]}>{props.title}</h3>

      <div className={classes.description}>{props.description}</div>
      <div className={classes.details}>
        <div>{props.category}</div>
        <div>{props.price}</div>
      </div>
      <div className={classes.Button}>
        <Button onClick={addItemToCartHandler}>
          <h2>Add to Cart</h2>
        </Button>
      </div>
    </Card>
  );
};
export default Item;
