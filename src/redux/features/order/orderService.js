import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const ORDER_API_URL = `${BACKEND_URL}/api/orders/`;

// Place Order
const placeOrder = async (orderDetails) => {
    const response = await axios.post(`${ORDER_API_URL}placeOrder`, orderDetails);
    return response.data;
}
// get Order
const getOrders = async () => {
    const response = await axios.get(`${ORDER_API_URL}getOrders`);
    return response.data;
}
// get Admin Orders
const getAdminOrders = async () => {
    const response = await axios.get(`${ORDER_API_URL}getAdminOrders`);
    return response.data;
}
// update Order Status
const updateOrderStatus = async (updatedData) => {
    const response = await axios.put(`${ORDER_API_URL}updateOrderStatus`, updatedData);
    return response.data;
}



const orderService = {
    placeOrder,
    getOrders,
    getAdminOrders,
    updateOrderStatus
}

export default orderService;
