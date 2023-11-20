// import React from "react";
// import { useState,forwardRef,useImperativeHandle,useRef} from "react";
// import Product from "./Product";
// //import Productlist from "./Prodectlist";


// function  Cart(props,ref){
//     const[cart, setCart]=useState("this is child component of Main parent");
// const productref= useRef();

// useImperativeHandle(ref,()=>({
//     Carts
// }))

// // const handleAddProduct=(product)=>{
// //     setCart ((prevCart)=>[...prevCart,product])
// // }
//     function Carts(){
//         setCart("this carts is Carts component")
//     }
// // const array =[{id:1, name:"HeadPhone", price:"2000rs" },
// // {id:2, name:"HeadPhone", price:"1000rs" },
// // {id:3, name:"HeadPhone", price:"1500rs" }
// // ]
    
//     return(

//         <div>
// <h1> Welcome to our Cart page</h1>
// <button onClick={()=>productref.current.Products()}> Cart Button</button>
// {/* <Productlist array={array} handleAddProduct={handleAddProduct}/> */}
// <Product ref  ={productref}/>
// {cart}

//         </div>
//     )
// }
// export default  forwardRef (Cart);

import React from 'react';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
