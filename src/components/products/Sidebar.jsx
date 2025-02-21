import React from "react";
import { Link } from "react-router-dom";

const ProductSidebar = () => {
  return (
    <div className="product-sidebar">
      <h2>Products Categories</h2>
      <ul>
        <li>
          <Link to="/products/cloth">Clothes</Link>
        </li>
        <li>
          <Link to="/products/shoes">Shoes</Link>
        </li>
        <li>
          <Link to="/products/jewellery">Jewellery</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductSidebar;
