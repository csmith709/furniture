
import './App.css';
import Navbar from '../src/components/navBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from '../src/pages/Shop';
import ShopCategory from '../src/pages/ShopCategory';
import Product from '../src/pages/Product';
import Cart from '../src/pages/Cart';
import banner_save from '../src/components/assets/banner_save.png';

import Footer from '../src/components/Footer/Footer';
import nav_banner from './components/assets/nav_banner.png';

import women_banner from '../src/components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'

import ShopContextProvider from '../src/context/ShopContext';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ShopContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={nav_banner} category="office"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/seating' element={<ShopCategory banner={banner_save} category="living"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>
      <Footer/>
      </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;