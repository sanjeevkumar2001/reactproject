import "./style.css"
import { Link } from "react-router-dom";
import{useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import Cart from "./Cart";
import { addItem } from "../utils/cartSlice";
// product item displays the single item that is displayed like a card.
function ProductItem(props){
    //  const cartItems = useSelector(store => store.cart.items);
     const dispatch = useDispatch();
     function handleClick(item){
        
        
        dispatch(addItem(item))
        {<Cart cart={item}></Cart>}

     }
    
    return(
        <>
     
      
    
      
        <div  className="product-card2">
        <img src={props.data.image} alt={props.data.name} />
        <h1>{props.data.name}</h1>
        
        <p className="price">₹{props.data.price}</p>
        <Link to={`/products/${props.data.id}`}>View  More Details</Link>

        
           <button onClick={() => handleClick(props.data)}>Add to Cart</button>
        
        
       
         </div>
        
        
        
           
         
        
        </>
    )
}
export default ProductItem;