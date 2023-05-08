import './App.css';
import ReactGA from 'react-ga'
import React, { useEffect } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import MenList from './pages/MenList'
import SuitList from './pages/SuitList'
import MenSportList from './pages/MenSportList'
import WomanList from './pages/WomanList'
import KidList from './pages/KidList'
import MenProduct from './pages/MenProduct'
import WomanProduct from './pages/WomanProduct'
import KidProduct from './pages/KidProduct'

//const NEW_TRACKING_ID = 'G-G9TZTTT9TP';
const TRACKING_ID = 'G-V859TH90Q5';
function App() {

  useEffect(() => {
    
    ReactGA.initialize(TRACKING_ID)
    
    ReactGA.pageview(window.location.pathname + window.location.search);
  
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index path='/' element={<Home />}/>
            <Route path='/popproduct' element={<ProductList />}/>
            <Route path='/woman' element={<WomanList />}/>
            <Route path='/men' element={<MenList />}/>
            <Route path='/suit' element={<SuitList />}/>
            <Route path='/sport' element={<MenSportList />}/>
            <Route path='/cosmetics' element={<KidList />}/>
            <Route path='/popproduct/:id' element={<Product />}/>
            <Route path='/woman/:id' element={<WomanProduct />}/>
            <Route path='/men/:id' element={<MenProduct />}/>
            <Route path='/cosmetics/:id' element={<KidProduct />}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

