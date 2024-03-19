import React, { useState } from "react";
import Navbar from "./Navbar";
import Product from "./Product";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import SearchItem from "./SearchItem";
import Cart from "./Cart";
import { items } from "./Data";
 
import LoginSignUp from './LoginSignUp/LoginSignUp';

const App = () => {
  const [data,setData] = useState([...items]);
  const [cart,setCart] = useState([])


  return (
    <>
   
      <BrowserRouter>

        <Navbar Cart={cart} setData={setData}/>
        <Routes>
           
          <Route path="/" element={<Product  cart={cart} setCart={setCart} items={data} />} />
          <Route path="/product/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
          <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart  cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
