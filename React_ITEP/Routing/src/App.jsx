import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import Category from './components/Category'
import FeatureProduct from './components/FeatureProduct'

const App = () => {
  return (
    <>
    <div className='d-flex justify-content-around text-white p-3 bg-danger  text-black'>
      <Link to="/home"><span>Home</span></Link>
      <Link to="/about"><span>About</span></Link>
      <Link  to="/contact"><span>Contact</span></Link>
      <Link  to="/product"><span>Product</span></Link>
    </div>

   <Routes>
    <Route path='home' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='product' element={<Product/>}>
      <Route index element={<Category/>}/>
      <Route path='feature-product' element={<FeatureProduct/>}/>
      <Route path='category' element={<Category/>}/>
    </Route>
   </Routes>
    </>
  )
}

export default App