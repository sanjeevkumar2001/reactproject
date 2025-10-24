import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import "./style.css";
// we have used useselector to check iotems in the cart, and then the total price is displayed in checkout page.
function Checkout() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    dispatch(clearCart());
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div className="checkout-items">
            {cartItems.map((item, index) => (
              <div key={index} className="checkout-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h2>{item.name}</h2>
                  <p>Price: ₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="total">Total: ₹{totalPrice}</h2>
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;
