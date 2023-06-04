import React from 'react';
import './index.css';
import MenClothingImage from '../Assets/MenClothing.jpg';
import ElectronicsImage from '../Assets/Electronics.jpg';
import JewelleryImage from '../Assets/Jewellery.jpg';
import WomenClothingImage from '../Assets/WomenClothing.jpg';


const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to our Online Store</h1>
      <h2>Discover a wide range of products at great prices.</h2>
    
     
      <div className="product-categories">
        
          <div className="category">
            <img src={MenClothingImage} alt="Men's Clothing" />
            <h3>Men's Clothing</h3>
          </div>
        
        
          <div className="category">
            <img src={ElectronicsImage} alt="Electronics" />
            <h3>Electronics</h3>
          </div>
        
        
          <div className="category">
            <img src={JewelleryImage} alt="Jewelries" />
            <h3>Jewelries</h3>
          </div>
        
        
          <div className="category">
            <img src={WomenClothingImage} alt="Women's Clothing" />
            <h3>Women's Clothing</h3>
          </div>
        
      </div>
    </div>
  );
};

export default Home;  
      
