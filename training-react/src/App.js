
import React from 'react';

import Home from './pages/Home';

import Catalog from './pages/Catalog/catalog';
import './grid.css'
import './app.css';

import { 
    BrowserRouter as Router,
    Routes,
    Route,
    link
 } from "react-router-dom";
import SingleItem from './pages/SingleItem/singleItem';
import ProfileSettings from './pages/Account/ProfileSettings/profileSettings';
import MyItem from './pages/Account/ProfileSettings/myItem';

function App() {

return (
    <>
    <Router>
        <Routes>            
            <Route path='/' element={<Home />}/>
            <Route path='/catalog' index element={<Catalog />}/>
            <Route path='/single-item' index element={<SingleItem />}/>
            <Route path='/account/profile' index element={<ProfileSettings />}/>
            <Route path='/account/my-item' index element={<MyItem />}/>
        </Routes>
    </Router>
    </>
);
}

export default App;
