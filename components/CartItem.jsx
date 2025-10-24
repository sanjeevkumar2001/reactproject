import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

// displays a cart item in the cart page and using useselector, subscribe to the store, using diapatch we can clear the item.
function CartItem({data,index}){
    const cartItems = useSelector((store) => store.cart.items);
     const dispatch = useDispatch();
   
    const handleRemove = (index) => dispatch(removeItem(index));
    
   
  

    return(
        <>
           <div className="cart-item" >
             <img src={data.image} alt={data.name} />
             <div className="cart-item-info">
               <h2>{data.name}</h2>
               <p className="cart-price">₹{data.price}</p>
               <p className="cart-category">{data.category}</p>
               <button
                 className="cart-remove"
                 onClick={() => handleRemove(index)}
               >
                 Remove
               </button>
             </div>
           </div>

        
        </>

    )
}
export default CartItem;