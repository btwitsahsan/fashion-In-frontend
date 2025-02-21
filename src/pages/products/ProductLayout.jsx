import React from 'react'
import { Outlet } from 'react-router-dom'
import ProductSidebar from '../../components/products/Sidebar'
import './product.css'

const ProductLayout = () => {
  return (
    <>
    <div className="product-container">
      <ProductSidebar/>
      <div className="product-content">
        <Outlet/>
      </div>
      </div>
    </>
  )
}

export default ProductLayout