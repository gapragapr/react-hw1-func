import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CreateShopCard from './components/CreateShopCard/CreateShopCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateShopCard />
  </React.StrictMode>
);
reportWebVitals();
