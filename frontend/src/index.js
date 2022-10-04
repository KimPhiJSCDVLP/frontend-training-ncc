import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import axios from 'axios';
import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.common['Authorization'] = 'Bearer 3|KEdWdgknChPinjJeEGS7CA7fSo5cfNk6OruNfYeM';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// khởi tạo apollo client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:9000/graphql',
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
  
);

