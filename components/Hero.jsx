import React, { useState, useEffect } from "react";
import celebrity from "../utils/mockdata";
import "./style.css";
// hero component is used to just show like corosel and using set interval the image is displayed for 1 second, just for visual effects we have used the component
function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % celebrity.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const product = celebrity[currentIndex];

  return (
  <div className="hero-fullwidth-wrapper">
    <div className="hero-card">
      <div className="hero-content">
        <div className="hero-left">
         <div className="celebrity-details">
                <h1 className="celebrity-name">{product.celebrity}</h1>
                <h2 className="product-name">{product.product}</h2>
                <p className="product-description">{product.description}</p>
                </div>

        </div>      
        <div className="hero-right">
          <div className="image-box">
            <img
              src={product.imageUrl}
              alt={product.product}
              className="celebrity-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

}

export default Hero;
