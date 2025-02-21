import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./checkout.css";
import { placeOrder } from "../../redux/features/order/orderSlice";


const Checkout = () => {
  const { cartItems, totalCartPrice } = useSelector((state) => state.cart);
  // const { user } = useSelector((state) => state.auth);
const dispatch = useDispatch();
  const [shipping, setShipping] = useState({
    name: "",
    phoneNo: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    const orderDetails = {
      items: cartItems,
      totalPrice: totalCartPrice,
      shippingInfo: shipping,
    };

    // if (orderDetails.items.length === 0){
    //     return console.log("your cart is empty")
    // }
    
    dispatch(placeOrder(orderDetails));
    // console.log("Order Placed:", orderDetails);
    // alert("Order placed successfully!");
};

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* Shipping Details Form */}
      <div className="shipping-form">
        <h3>Shipping Information</h3>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="number" name="phoneNo" placeholder="Enter Your Number" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" onChange={handleChange} required />
        <input type="text" name="postalCode" placeholder="Postal Code" onChange={handleChange} required />
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item._id} className="order-item">
            <img src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>{item.quantity} × ${item.price.toFixed(2)}</p>
              <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          </div>
        ))}
        <h3>Total: ${totalCartPrice.toFixed(2)}</h3>
        <button className="checkout-btn" onClick={handleOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
