import React from 'react';

const ExibirFotos = ({ validatedImages }) => {
  return (
    <div>
      <h1>Fotos Validadas</h1>
      {validatedImages.map((imageSrc, index) => (
        <img key={index} src={imageSrc} alt={`Imagem ${index}`} />
      ))}
      {/* Outros elementos para exibir as imagens */}
    </div>
  );
};

export default ExibirFotos;
