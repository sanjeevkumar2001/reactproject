import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import "./style.css";
import {Link} from "react-router-dom";
import CartItem from "./CartItem";

// displays the list of cart items 
function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
   const total = cartItems.reduce((sum, item) => sum + item.price, 0);
   const dispatch = useDispatch();
   const handleClear = () => dispatch(clearCart());
    
 
  

  

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="empty cart"
        />
        <h2>Your cart is empty!</h2>
        <p>Looks like you haven’t added anything yet.</p>
      </div>
    );
  }

  return (
    <div className="cart-wrapper">
      <h1 className="cart-title">🛍️ Your Shopping Cart</h1>

      <div className="cart-grid">
        {cartItems.map((item, index) => (
          
        <CartItem key={index}data={item} index={index}></CartItem>
        ))}
      </div>
         <div className="cart-summary">
        <h2>Total: ₹{total}</h2>
        <button className="cart-clear" onClick={handleClear}>
          Clear Cart
        </button>
         <Link to="/checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      </div>

      
    </div>
  );
}

export default Cart;
