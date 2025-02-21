import React from "react";
import { shortenText } from "../../utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="productItem">
      <Link to={`/productDetail/${product._id}`}>
        <img className="product-image" src={product.image} alt="product" />
        <p className="product-price">{`${product.price}`}</p>
        <h4>{shortenText(product.name, 18)}</h4>
        <p className="product-desc">{shortenText(product.description, 26)}</p>
      </Link>

      <button className="anmoBTN2" onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
