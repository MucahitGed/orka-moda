import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import ProductList from '../pages/ProductList'
import MenList from '../pages/MenList'
import WomanList from '../pages/WomanList'
import KidList from '../pages/KidList'
import MenProduct from '../pages/MenProduct'
import WomanProduct from '../pages/WomanProduct'
import KidProduct from '../pages/KidProduct'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path='/' element={<Home />}/>
            <Route path='/popproduct' element={<ProductList />}/>
            <Route path='/woman' element={<WomanList />}/>
            <Route path='/men' element={<MenList />}/>
            <Route path='/kid' element={<KidList />}/>
            <Route path='/popproduct/:id' element={<Product />}/>
            <Route path='/woman/:id' element={<WomanProduct />}/>
            <Route path='/men/:id' element={<MenProduct />}/>
            <Route path='/kid/:id' element={<KidProduct />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router