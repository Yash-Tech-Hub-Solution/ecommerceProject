import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';  // Ensure Shop component exists
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'; // Ensure Product component exists
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/men_banner.jpg';
import women_banner from './Components/Assets/women_banner.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} /> 
          <Route path='/Men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/Women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/product/:productId' element={<Product />} /> {/* Fixed Dynamic Route */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
