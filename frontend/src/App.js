
import Home from './pages/Home';
import Product from './pages/Product';  
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet

} from "react-router-dom";
import { useState } from 'react'
import React from 'react';
import Category from './pages/Category';
import Cart from './pages/Cart';
import CheckoutComponent from './pages/Cart/components/CheckoutComponent/checkoutcomponent';
import AdminDashBoard from './pages/AdminDashboard';
import ProductManage from './pages/AdminDashboard/components/ContentComponent/ProductManage/productmanage';
import CategoryManage from './pages/AdminDashboard/components/ContentComponent/CategoryManage/category';
import LoginAdmin from './pages/AdminDashboard/components/LoginAdminComponent/loginadmin';
import routes from './pages/AdminDashboard/routes';
function App() {
  const isLoggin = localStorage.getItem("access_token") 
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route  path="/"  index element={<Home />} />
            <Route  path="/product"  index element={<Product />} />
            <Route  path="/product:id"  index element={<Product />} />
            <Route  path="/category"  index element={<Category />} />
            <Route  path="/cart"  index element={<Cart />} />
            <Route  path="/checkout"  index element={<CheckoutComponent/>} />
            <Route  path="/admin" index element={isLoggin ? <AdminDashBoard/> :  <Navigate to="/admin/login" replace />} />
            <Route  path="/admin-product"  index element={<ProductManage/>} />
            <Route  path="/admin-category"  index element={<CategoryManage/>} />
            <Route  path="/admin/login"  index element={<LoginAdmin/>} />
            <Route path="/admin" element={<AdminDashBoard><Outlet /></AdminDashBoard>}>
                {
                    routes
                        .map(({ path, component: Comp, childs }) => {
                            return childs ? childs.map(({ path: childPath, component: ChildComp }) => <Route
                                path={path + "/" + childPath}
                                element={<ChildComp />}
                            />
                            ) : <Route
                                path={path}
                                key={path}
                                element={<Comp />}
                            />
                        }
                        )}
                <Route index />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
