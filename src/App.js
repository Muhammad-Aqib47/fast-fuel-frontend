import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing-page/full-landing-page/landing-page';
import React from 'react';
import BuyerLoginForm from './components/buyer-login/buyer-login';
import SellerSignUpForm from './components/seller-signup/seller-signup';
import BuyerSignUpForm from './components/buyer-signup/buyer-signup';
import SellerLoginForm from './components/seller-login/seller-login';
import OrderStatus from './components/buyer/order-status/index'
import Error from './pages/404';
import Profile from './components/buyer/profile';
import BuyerDashBoard from './components/buyer/fullForm/index';
import SellerDashBoard from './components/seller/seller';
import AddFuel from './components/seller/add-fuel';


function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/seller_login" element={<SellerLoginForm />} />
      <Route path="/seller_signup" element={<SellerSignUpForm />} />
      <Route path="/buyer_login" element={<BuyerLoginForm />} />
      <Route path="/buyer_signup" element={<BuyerSignUpForm />} />
      <Route path='/buyer_order_fuel' element={<BuyerDashBoard />} />
      <Route path='/order_status' element={<OrderStatus />} />
      <Route path='/buyer_profile' element={<Profile />} />
      <Route path='/seller_buyer_orders' element={<SellerDashBoard />} />
      <Route path='/seller_add_fuel' element={<AddFuel />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
}

export default App;
