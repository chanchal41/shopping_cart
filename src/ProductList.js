// import { useState } from "react";
// import React  from "react";
// //import Cart from "./Cart";
// import Product from "./Product";



// const ProductList = ({ products, onAddProduct }) => { 
    
//         // State to keep track of the selected products (you can replace this with your desired data structure)
//         const [selectedProducts, setSelectedProducts] = useState([]);
      
//         const handleAddProduct = (product) => {
//           // Add the selected product to the state or perform your desired action
//           setSelectedProducts([...selectedProducts, product]);
//         };
       
//     return(
    
//         <div>
//             {products.map((product) => (
//         <Product key={product.id} product={product} onAddProduct={onAddProduct} />
//       ))}
           
// <h1> Select all product in Prodectlist </h1>


//       {products.map((product) => (
//         <div key={product.id}>
//           <p>{product.name} - ${product.price}</p>
//           <button onClick={() => handleAddProduct(product)}>Add</button>
//         </div>
//       ))}
//         </div>
//     )
// }

// export default ProductList;

// // import React from 'react';
// // import Product from './Product';

// // const ProductList = ({ products, onAddProduct }) => {
// //   return (
// //     <div className="product-list">
// //       {products.map((product) => (
// //         <Product key={product.id} product={product} onAddProduct={onAddProduct} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default ProductList;

import React from 'react';
import Product from './Product';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;



