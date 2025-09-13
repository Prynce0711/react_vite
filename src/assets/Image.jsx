import React from "react";    

function ImageCard({ image, title, description }) {
  return (
    <div className="image-card">
      <img src={image}  />
      <h3>{title}</h3>
      
    </div>
  );
}

export default ImageCard;
