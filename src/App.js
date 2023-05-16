// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./Components/Layout/Header";
import AvailableItems from "./Components/Items/AvailableItems";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
// import DataFetching from "./DataFetching/DataFetching";

// import UseFetch from "./UseFetch";

function App() {
  // const [content, setContent] = useState(null);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setContent(res);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // // const { data, error } = UseFetch("https://fakestoreapi.com/products");

  const [cartIsShown, setCartIsShown] = useState(false);
  const ShowCartHandler = () => {
    setCartIsShown(true);
  };
  const HideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {/* {content && content} */}
      {/* {...data} */}
      <div className="App">
        <div>
          {/* <DataFetching /> */}
          {cartIsShown && <Cart onHideCart={HideCartHandler} />}
          <Header onClick={ShowCartHandler}></Header>
          <AvailableItems />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
