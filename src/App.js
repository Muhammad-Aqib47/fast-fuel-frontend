import './App.css';
import BuyerLoginForm from './components/buyer-login/buyer-login';
import BuyerSignUpForm from './components/buyer-signup/buyer-signup';
import SellerLoginForm from './components/seller-login/seller-login';
import SellerSignUpForm from './components/seller-signup/seller-signup'; 
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
       <Routes>
          <Route path="/sellerlogin" element={<SellerLoginForm/>} />
          <Route path="/sellersignup" element={<SellerSignUpForm />} />
          <Route path="/buyerlogin" element={<BuyerLoginForm />} />
          <Route path="/buyersignup" element={<BuyerSignUpForm />} />

       </Routes>
    </>
 );
};


export default App;
