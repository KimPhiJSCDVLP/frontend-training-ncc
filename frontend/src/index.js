import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './pages/Home/components/Header/header';
import Footer from './pages/Home/components/Footer/footer';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.common['Authorization'] = 'Bearer 3|KEdWdgknChPinjJeEGS7CA7fSo5cfNk6OruNfYeM';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
  
);

