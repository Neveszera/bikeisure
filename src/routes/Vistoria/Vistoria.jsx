import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';
import './Vistoria.css';

const Vistoria = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [objectDetected, setObjectDetected] = useState(null);
  const webcamRef = React.useRef(null);

  const captureImage = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);

    // Carrega o modelo COCO-SSD
    const model = await cocossd.load();

    // Carrega a imagem capturada como um elemento HTMLImageElement
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    await imgElement.decode();

    // Detecta objetos na imagem
    const predictions = await model.detect(imgElement);

    // Verifica se a bicicleta foi detectada
    const bicycleDetected = predictions.some((prediction) =>
      prediction.class === 'bicycle'
    );

    if (bicycleDetected) {
      setObjectDetected('Bicicleta encontrada, foto aprovada!');
    } else {
      setObjectDetected('Sem bicicleta visível, tire uma nova foto');
    }
  };

  useEffect(() => {
    // Configure o backend do TensorFlow.js (pode ser 'webgl', 'wasm', etc.)
    tf.setBackend('webgl');
  }, []);

  return (
    <div className="vistoria-container">
      <div className="vistoria-header">
        <h1>Bikeisure</h1>
        <h3>Etapa 3 - 4</h3>
        <p>Tire fotos da bicicleta e faça o envio para validação.</p>
      </div>

      <div className="vistoria-content">
        {capturedImage ? (
          <div>
            <img src={capturedImage} alt="Imagem Capturada" className="captured-image" />
            <p className="object-detected">{objectDetected}</p>
          </div>
        ) : (
          <div>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="webcam"
            />
            <button onClick={captureImage} className="capture-button">Capturar Imagem</button>
          </div>
        )}
      </div>

      <div className="vistoria-button">
        <button>Próxima Etapa</button>
      </div>
    </div>
  );
};

export default Vistoria;
