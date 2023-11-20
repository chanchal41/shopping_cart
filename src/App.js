// //import logo from './logo.svg';
// import './App.css';
// import Main from './Main';
// import  {useState}from 'react';
//  import Productlist from './Prodectlist';
// // import TotalPrice from './TotalPrice';



// const App = () => {
//   // Sample product data
//   const initialProducts = [
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 20 },
//     // Add more products as needed
//   ];

//   const [cartItems, setCartItems] = useState([]);

//   const handleAddProduct = (product) => {
//     // Update the cartItems state when the "Add" button is clicked
//     setCartItems((prevCartItems) => [...prevCartItems, product]);
//   };

//   return (
//     <div className="app">
//       <h1>Product List</h1>
//       <Main/>
//       <Productlist products={initialProducts} onAddProduct={handleAddProduct} />
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>{item.name} - ${item.price}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import Main from './Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
