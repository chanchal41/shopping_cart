// import React from "react";

// function  TotalPrice(){

//     return(

        
//         <div>
// <h1> Add total price  in Productlist </h1>
//         </div>


//     )
// }
// export default TotalPrice;

import React from 'react';

function TotalPrice({ cartItems }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="total-price">
      <h2>Total Price</h2>
      <p>Total: ${totalPrice}</p>
    </div>
  );
}

export default TotalPrice;
