import React, { useEffect } from 'react'
import ProductCard from '../../components/products/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../redux/features/product/productSlice'

const ProductList = () => {
  const {category} = useParams();
  const { products } = useSelector((state) => state.product);
const dispatch = useDispatch();

  useEffect(()=>{
    if(!category || category === "productList"){
      dispatch(getProducts());
    }
    else{
      dispatch(getProducts(category));
    }
  },[category, dispatch])

  return (
    <>
    <h2 className='pro-page-heading'>{category && category !== "productList" ? `${category} Products` : "All Products"}</h2>
    <div className='product-list'>
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
    </>
  )
}

export default ProductList