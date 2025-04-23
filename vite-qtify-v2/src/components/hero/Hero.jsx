import React from "react";
import Styles from "./Hero.module.css";
import Headphones from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <div className={Styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={Headphones}
          width={212}
          alt="headphones"
        />
      </div>
    </div>
  );
}

export default Hero;