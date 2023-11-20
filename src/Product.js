// import React, { useState ,forwardRef,useImperativeHandle} from "react";

// //import  React from "react";
// //import Productlist from "./Prodectlist";



// const Product = ({ product1, onAddProduct }) => {
//     const handleAddClick = () => {
//         onAddProduct(product1);
//     }
// //function Product(props,ref){
//     //const [name, setName] = useState("sample name");
//     //const[id,setId]=useState("");
//        //const[price,setPrice]=useState("");
//     //    const [inputValue, setInputValue] = useState('');
//     //    const [items, setItems] = useState([
//     //     { itemName: 'item 1', quantity: 1, isSelected: false },
//     //     { itemName: 'item 2', quantity: 3, isSelected: true },
//     //     { itemName: 'item 3', quantity: 2, isSelected: false },
//     // ]);

// const[product2, setProduct]= useState("product is child of cart")

//     useImperativeHandle(()=>({
// Products
//     }))
//     function Products(){
    
// setProduct("product is child of cart component")
//     }

    
//     // const Product = ({ product, onAddProduct }) => {
//     //     const handleAddClick = () => {
//     //         onAddProduct(product);
//     //     }
// return(
//     <div>
//      <h3>{product2.name}</h3>
//       <p>Price: ${product2.price}</p>
//       <button onClick={handleAddClick}>Add to Cart</button>
      
//     </div>
    
// )}
// export default forwardRef (Product) ;

import React from 'react';

function Product({ product, onAddToCart }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
