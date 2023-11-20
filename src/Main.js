// import React from "react";
// import Cart from "./Cart";
// import {useRef} from 'react';

// function Main(){
// const CartRef=useRef();
//     return(
// <div>
//     <h1>Welcome to our Page </h1>
//     <button onClick={()=>CartRef.current.Carts()}> Main button</button>
//     <Cart ref = {CartRef}/>
// </div>
//     )
// }
// export default Main;

import React, { useState } from 'react';
// import Cart from './Cart';
import ProductList from './ProductList';
import TotalPrice from './TotalPrice';

function Main() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="main">
      <h1>Shopping Cart App</h1>
      {/* <Cart cartItems={cartItems} /> */}
      <ProductList addToCart={addToCart} />
      <TotalPrice cartItems={cartItems} />
    </div>
  );
}

export default Main;
