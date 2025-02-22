import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./myOrder.css";
import { getOrders } from "../../redux/features/order/orderSlice";
import { Spinner } from "../../components/loader/Loader";

const MyOrders = () => {
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <div className="orders-container">
      <h2>My Orders</h2>

      {isLoading && <Spinner/>}

      {orders?.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className="orders-list">
          {orders?.map((order) => (
            <div key={order._id} className="order-card">
              <h4>Order ID: {order._id}</h4>
              <p>Placed on: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p className="statusP">Status: <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></p>

              <div className="order-items">
                {order.items.map((item) => (
                  <div key={item._id} className="order-item">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <p>{item.quantity} × ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h4>Total: ${order.totalPrice.toFixed(2)}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
