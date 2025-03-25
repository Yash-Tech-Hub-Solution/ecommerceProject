import React, { useState } from "react";
import './Hero.css';
import hand_icon from "../Assets/hand-icon.png";
import arrow_icon from "../Assets/icons8-arrow.gif";
import hero_image from "../Assets/Zara.png";
import back_image1 from "../Assets/ZaraModel.png";
import back_image2 from "../Assets/back_image2.png";

const Hero = () => {
    // Order of images in rotation
  const [images, setImages] = useState([back_image1, back_image2, hero_image]);

  const rotateImages = () => {
    setImages([images[2], images[0], images[1]]); // Circular rotation
  };
  
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div className="hero-text">
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="Hand Icon" />
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>

      <div className="hero-right">
      <img src={images[0]} className="back-image back-left" alt="Back Left" onClick={rotateImages} />
        <img src={images[1]} className="back-image back-right" alt="Back Right" onClick={rotateImages} />
        <img src={images[2]} className="front-image" alt="Front" onClick={rotateImages} />

      </div>
    </div>
  );
};

export default Hero;

