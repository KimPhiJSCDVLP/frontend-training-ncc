
import Home from './pages/Home';
import Product from './pages/Product';  
import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";
import { useState } from 'react'
import React from 'react';
import Category from './pages/Category';
import Cart from './pages/Cart';
import CheckoutComponent from './pages/Cart/components/CheckoutComponent/checkoutcomponent';
import AdminDashBoard from './pages/AdminDashboard';
import Login from './pages/Home/components/Login/login';

// function getToken() {
//   const tokenString = sessionStorage.getItem("user");
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
// }
// function setToken(userToken) {
//   sessionStorage.setItem("user", JSON.stringify(userToken));
// }
function App() {
  // const token = getToken()
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route>
              <Route  path="/"  index element={<Home />} />
            </Route>
            <Route  path="/product"  index element={<Product />} />
            <Route  path="/product:id"  index element={<Product />} />
            <Route  path="/category"  index element={<Category />} />
            <Route  path="/cart"  index element={<Cart />} />
            <Route  path="/checkout"  index element={<CheckoutComponent/>} />
            <Route  path="/admin"  index element={<AdminDashBoard/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
