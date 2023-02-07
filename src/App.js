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
import Welcome from './components/welcome/welcome';
import Error from './pages/404';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/sellerlogin" element={<SellerLoginForm />} />
      <Route path="/sellersignup" element={<SellerSignUpForm />} />
      <Route path="/buyerlogin" element={<BuyerLoginForm />} />
      <Route path="/buyersignup" element={<BuyerSignUpForm />} />
      <Route path='/form' element={<BuyerForm />} />
      <Route path='/order-status' element={<OrderStatus />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
