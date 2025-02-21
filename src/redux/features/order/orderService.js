import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const ORDER_API_URL = `${BACKEND_URL}/api/orders/`;

// Place Order
const placeOrder = async (orderDetails) => {
    const response = await axios.post(`${ORDER_API_URL}placeOrder`, orderDetails);
    return response.data;
}



const orderService = {
    placeOrder,
}

export default orderService;
