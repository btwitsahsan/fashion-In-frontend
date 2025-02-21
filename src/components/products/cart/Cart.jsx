import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from "../../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalCartPrice } = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item._id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="cart-quantity">
                    <button onClick={() => dispatch(decreaseQuantity(item))} className="qty-btn">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item))} className="qty-btn">+</button>
                  </div>
                  <p>Total: ${ (item.price * item.quantity).toFixed(2) }</p>
                  <button onClick={() => dispatch(removeFromCart(item))} className="remove-btn">X</button>
                </div>
              </li>
            ))}
          </ul>

          {/* 🆕 Display total cart price */}
          <div className="cart-total">
            <h3>Total Price: ${totalCartPrice.toFixed(2)}</h3>
          </div>
<div className="cart-btns">
          <button onClick={() => dispatch(clearCart())} className="clear-cart-btn">Clear Cart</button>
          <Link to="/checkout" className="checkout-cart-btn">Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
