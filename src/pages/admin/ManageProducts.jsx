import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/features/product/productSlice";

const ManageProducts = () => {

const {products} = useSelector((state) => state.product);
const dispatch = useDispatch();

const deleteHandle = async (productId) => {
  await dispatch(deleteProduct(productId));
  // dispatch(getProducts());
}

  return (
    <>
    <div className="product-header">
        <h2 className="pageHeading">Manage Products</h2>
        <Link className="anmoBTN2" to="/admin/createProduct">Create Product</Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>image</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product._id}>
                <td><img className="tableImg" src={product.image} alt={product.name} /></td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button className="anmoBTN2 btn-delete" onClick={()=>deleteHandle(product._id)}>Delete</button>
                  <Link className="anmoBTN2 btn-edit" to={`/editProduct/${product._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
  );
};

export default ManageProducts;
