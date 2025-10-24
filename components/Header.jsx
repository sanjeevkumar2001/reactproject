import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// header component is used for project title, and then navigation links.
function Header() {
  const cartItems = useSelector(store => store.cart.items);
  return (
    <header>
      {/* Left: Shopping Cart */}
      <div className="left-section">
        <img
          src="https://thumbs.dreamstime.com/b/cute-colorful-icon-shopping-cart-filled-various-packaged-items-cartoon-style-clean-lines-solid-colors-388235163.jpg"
          alt="Shopping Cart"
          className="cart-icon"
        />
      </div>

      {/* Center: Shoppy Globe Logo as big title */}
      <div className="center-section">
        <img
          src="https://api.logo.com/api/v2/images?design=lg_pJoDqhZfg6mVxBRZlN&u=1752965718134&width=1600&height=900&margins=300&fit=contain&format=webp&quality=60&tightBounds=true"
          alt="Shoppy Globe Logo"
          className="logo-title" width="200px" height="200px"
        />
      </div>

      {/* Right: Navigation */}
      <div className="right-section">
        <nav>
          <ul>
            <Link to="/">
                  <li>Home</li>
            </Link>
            <Link to="/products">
                <li>Product Collections</li>
            </Link>
            
            <Link to="/cart">
                 <li>{cartItems.length}Cart</li> 
            </Link>
           
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

