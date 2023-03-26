import React from "react";
import "../components/HeroImage.css";

const HeroImage = () => {
  return (
    <div className="heroImg">
      <img
        className="theImgItself"
        src="https://images.unsplash.com/photo-1653130892581-7c0ae1f4e8e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Foto de Hero Page"
      />
      <div className="imgText">
        <h1>Psicología Belinda</h1>
        <p>Trataremos de alejarte del manicomio el mayor tiempo posible</p>
      </div>
    </div>
  );
};

export default HeroImage;
