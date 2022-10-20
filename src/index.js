import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home';
import Bar from './components/Bar';
import Bookings from './components/Bookings';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter> 
    <Bar/>
    <App />
    
    </BrowserRouter>
  
);

