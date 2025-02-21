import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const PRODUCT_API_URL = `${BACKEND_URL}/api/products/`;

// dashboard
const dashboard = async () => {
    const response = await axios.get(`${PRODUCT_API_URL}dashboard`);
    return response.data;
}

// ADD PRODUCT
const createProduct = async (productData) => {
    const response = await axios.post(`${PRODUCT_API_URL}createProduct`, productData);
    return response.data;
}

// GET PRODUCTS
const getProducts = async (category) => {
    const url = category 
        ? `${PRODUCT_API_URL}getProducts?category=${category}` 
        : `${PRODUCT_API_URL}getProducts`;
    const response = await axios.get(url);
    return response.data;
};

// GET PRODUCT By Id
const getProductById = async (productId) => {
    const response = await axios.get(`${PRODUCT_API_URL}getProductById/${productId}`);
    return response.data;
}
// Update Product
const updateProduct = async (product) => {
    const response = await axios.post(`${PRODUCT_API_URL}updateProduct/${product._id}`, {
        product
    });
    return response.data;
}
// Delete Product
const deleteProduct = async (productId) => {
    // console.log(productId);
    const response = await axios.delete(`${PRODUCT_API_URL}deleteProduct/${productId}`);
    return response.data;
}


const productService = {
    dashboard,
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
}

export default productService;
