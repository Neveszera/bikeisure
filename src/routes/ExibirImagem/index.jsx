import React from 'react';

const ImageDisplay = ({ validatedImages }) => {
  return (
    <div className="image-display-container">
      <h1>Imagens Validadas</h1>
      {validatedImages.map((imageSrc, index) => (
        <div key={index} className="validated-image-container">
          <img src={imageSrc} alt={`Imagem Validada ${index + 1}`} className="validated-image" />
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
