import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import Modal from 'react-modal';
import './Vistoria.css';

Modal.setAppElement('#root');

const Vistoria = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [validationResult, setValidationResult] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const webcamRef = useRef(null);

  useEffect(() => {
    if (capturedImage) {
      validateImage();
    }
  }, [capturedImage]);

  const detectObjects = async (imageData) => {
    const imageElement = document.createElement('img');
    imageElement.src = imageData;

    const model = await cocoSsd.load();
    const predictions = await model.detect(imageElement);

    return predictions;
  };

  const validateImage = async () => {
    const predictions = await detectObjects(capturedImage);
    const isBicycleDetected = predictions.some((prediction) =>
      prediction.class === 'bicycle'
    );

    if (isBicycleDetected) {
      setValidationResult('Validação da foto completa: Contém uma bicicleta.');
    } else {
      setValidationResult('Validação incompleta: Nenhuma bicicleta detectada. Tente novamente.');
    }

    setModalIsOpen(true);
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
            <button onClick={captureImage}>Recapturar Imagem</button>
          </div>
        ) : (
          <div>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="webcam"
            />
            <button onClick={captureImage}>Capturar Imagem</button>
          </div>
        )}
      </div>

      <div className="vistoria-button">
        <button>Próxima Etapa</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Resultado da Validação"
        className="modal"
      >
        <h2>Resultado da Validação</h2>
        {capturedImage && (
          <div>
            <h3>Imagem Capturada:</h3>
            <img src={capturedImage} alt="Imagem Capturada" />
          </div>
        )}
        {validationResult && <p>{validationResult}</p>}
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
};

export default Vistoria;
