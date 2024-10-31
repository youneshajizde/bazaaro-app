"use client";

import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]); // Set the initial main image to the first one

  const handleImageClick = (url) => {
    setMainImage(url); // Update the main image when a smaller image is clicked
  };

  return (
    <div className="flex gap-5">
      {/* Small Images Column */}
      <div className="flex flex-col mr-4 space-y-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-20 h-20 cursor-pointer mb-2 rounded-xl object-cover"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {/* Main Image Display */}
      <div className="flex-1 h-[550px]">
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-full rounded-2xl shadow object-cover"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
