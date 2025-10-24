import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { useEffect, useState } from "react";
import "./style.css"; // external CSS
import { Link } from "react-router-dom";
import NotFound from "./Notfound";
// same own api using mockio website and then using useparams we filtered the product and give more details of the product with unique id 
function ProductDetail() {
  const { data, err, loading } = useFetch(
    "https://mocki.io/v1/e4027d83-f009-4d43-9537-e3626dfc7acd"
  );
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (data) setProducts(data.products);
  }, [data]);

    if (err) return <NotFound message={err}/>;
  if (loading) return <p className="loading">Loading...</p>;

  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) return <p className="error">Product not found!</p>;

  return (
    <div className="product-detail-container">
 
      <div className="product-card1">
        <img src={product.image} alt={product.name} className="product-image1" />
        <h1 className="product-title">{product.name}</h1>
        <p className="product-category">{product.category}</p>
        <p className="product-price">₹{product.price}</p>
        <p className="product-rating">⭐ {product.rating}</p>
        <p className="product-description">{product.description}</p>
        <Link to ="/products">

           <button >Back to Product Collections</button>
        </Link>
        <Link to="/">

           <button >Back to Home</button>
        </Link>
        
       
      </div>
    </div>
  );
}

export default ProductDetail;
