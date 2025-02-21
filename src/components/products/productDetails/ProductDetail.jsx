import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./productDetail.css";
import { getProductById } from "../../../redux/features/product/productSlice";
import { Spinner } from "../../loader/Loader";
import { addToCart } from "../../../redux/features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (isLoading) return <Spinner/>
//   if (error) return <p className="error">{error}</p>;


  return (
    <div className="product-detail-container">
      <div className="productDetail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-brand">Brand: {product.brand}</p>
        <p className="product-category">Category: {product.category}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-quantity">Stock: {product.quantity}</p>
        <button className="anmoBTN2" onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
