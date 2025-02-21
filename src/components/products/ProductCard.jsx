import React from "react";
import { shortenText } from "../../utils";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="productItem">
      <Link to="/product-details">
        <img className="product-image" src={product.image} alt="product" />
        <p className="product-price">{`${product.price}`}</p>
        <h4>{shortenText(product.name, 18)}</h4>
        <p className="product-desc">{shortenText(product.description, 26)}</p>
      </Link>

      <button className="anmoBTN2">Add To Cart</button>
    </div>
  );
};

export default ProductCard;
