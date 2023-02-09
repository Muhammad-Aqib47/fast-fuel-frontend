import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing-page/full-landing-page/landing-page';
import React from 'react';
import BuyerLoginForm from './components/buyer-login/buyer-login';
import SellerSignUpForm from './components/seller-signup/seller-signup';
import BuyerSignUpForm from './components/buyer-signup/buyer-signup';
import SellerLoginForm from './components/seller-login/seller-login';
import BuyerForm from './components/buyer/fullForm/index';
import OrderStatus from './components/buyer/order-status/index'
import Error from './pages/404';
import SellerDashboard from './components/seller/seller';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/seller_login" element={<SellerLoginForm />} />
      <Route path="/seller_signup" element={<SellerSignUpForm />} />
      <Route path="/buyer_login" element={<BuyerLoginForm />} />
      <Route path="/buyer_signup" element={<BuyerSignUpForm />} />
      <Route path='/buyer_Form' element={<BuyerForm />} />
      <Route path='/order_status' element={<OrderStatus />} />
      <Route path='*' element={<Error />} />
      <Route path='/seller_buyer_orders' element={<SellerDashboard />} />
    </Routes>
  );
}

export default App;
