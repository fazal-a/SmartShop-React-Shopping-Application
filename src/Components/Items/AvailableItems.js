import React, { useState, useEffect } from "react";

import classes from "./AvailableItems.module.css";
import Item from "./Item";

const AvailableItems = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json(data));
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    }; // async function bracket
    getProducts();
  }, []);

  const Loading = () => {
    return <h2>Loading....</h2>;
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
            />
          );
        })}
      </>
    );
  };

  return (
    <section className={classes.items}>
      {loading ? <Loading /> : <ShowProducts />}
    </section>
  );
}; //availbale items bracket

export default AvailableItems;
