import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
  <>
    <h1>Product Component</h1>
    <div className=' '>
    <Link to="category"><button className='btn btn-primary'>Category</button></Link>
    <Link to="feature-product"><button className='btn btn-warning ml-3'>Feature-Product</button></Link>
    </div>
    <Outlet/>
  </>
  )
}

export default Product