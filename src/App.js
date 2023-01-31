
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BuyerForm from './components/buyer';
import OrderStatus from './components/buyer/order-status/index'


function App() {
  return (
    <div>

      <Routes>

        <Route path='/' element={<BuyerForm />} />
        <Route path='/order-status' element={<OrderStatus />} />

      </Routes>

    </div>
  );
}

export default App;
