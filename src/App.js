import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/landing-page';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
  
     
    </div>
  );
}

export default App;
