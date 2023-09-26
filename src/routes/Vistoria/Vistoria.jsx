import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import Modal from 'react-modal';
import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';
import styles from './Vistoria.module.css';

Modal.setAppElement('#root');

const MIN_IMAGE_WIDTH = 800; // Defina a largura mínima desejada
const MIN_IMAGE_HEIGHT = 600; // Defina a altura mínima desejada

const Vistoria = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [showInstructionsModal, setShowInstructionsModal] = useState(true);
  const [hasBicycle, setHasBicycle] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const webcamRef = React.useRef(null);
  const [validatedImages, setValidatedImages] = useState([]);

  const stepMessages = [
    'Tire uma foto da bicicleta geral',
    'Tire uma foto da roda dianteira',
    'Tire uma foto da roda traseira',
    'Tire uma foto do quadro',
  ];

  const InstructionsModal = () => (
    <Modal
      isOpen={showInstructionsModal}
      onRequestClose={() => setShowInstructionsModal(false)}
      contentLabel="Instruções" className={styles['modal']}
    >
      <h2>Instruções para a Etapa {currentStep}</h2>
      <p>{stepMessages[currentStep - 1]}</p>
      <button onClick={() => setShowInstructionsModal(false)}>Fechar</button>  
    </Modal>
  );

  const captureImage = async () => {
    setIsCapturing(true);

    const imageSrc = webcamRef.current.getScreenshot();

    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    await imgElement.decode();

    const model = await cocossd.load();
    const predictions = await model.detect(imgElement);

    const isBicycleDetected = predictions.some(
      (prediction) => prediction.class === 'bicycle'
    );

    // Adicione uma validação adicional para verificar a resolução
    const imageWidth = imgElement.width;
    const imageHeight = imgElement.height;

    const isHighResolution =
      imageWidth >= MIN_IMAGE_WIDTH && imageHeight >= MIN_IMAGE_HEIGHT;

    if (isBicycleDetected && isHighResolution) {
      setModalMessage('Foto aprovada! ' + stepMessages[currentStep - 1]);
      setHasBicycle(true);
      setValidatedImages((prevImages) => [...prevImages, imageSrc]);
    } else {
      setModalMessage('Foto não atende aos critérios, tire outra foto');
      setHasBicycle(false);
    }

    setIsCapturing(false);
    setIsModalOpen(true);

    // Verifica se todas as etapas foram concluídas e ativa o botão "Próxima Etapa"
    if (currentStep === 4 && hasBicycle) {
      const totalValidatedImages = validatedImages.length;
      if (totalValidatedImages === 4) {
        setCurrentStep(currentStep + 1);
        setShowInstructionsModal(true);
      }
    }
  };

  const handleNextStep = () => {
    setIsModalOpen(false);
    setCapturedImage(null);

    if (currentStep < 4 && hasBicycle) {
      setCurrentStep(currentStep + 1);
      setShowInstructionsModal(true);
    } else if (currentStep === 4 && hasBicycle) {
      console.log('Imagens validadas:', validatedImages);
    } else {
      setShowInstructionsModal(true);
    }
  };

  useEffect(() => {
    tf.setBackend('webgl');
  }, []);

  const mobileWebcamOptions = {
    facingMode: 'environment', // Usa a câmera traseira do dispositivo, se disponível
  };

  return (
    <div className={styles['vistoria-container']}>
      <InstructionsModal />
      <div className={styles['vistoria-header']}>
        <h1>Bikeisure</h1>
        <h3>Etapa {currentStep} - 4</h3>
        <p>{stepMessages[currentStep - 1]}</p>
      </div>

      <div className={styles['vistoria-content']}>
        {capturedImage ? (
          <div>
            <img
              src={capturedImage}
              alt="Imagem Capturada"
              className={styles['captured-image']}
            />
          </div>
        ) : (
          <div>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className={styles['webcam']}
              videoConstraints={mobileWebcamOptions}
            />
            <button
              onClick={captureImage}
              className={styles['capture-button']}
              disabled={isCapturing}
            >
              {isCapturing ? 'Capturando...' : 'Capturar Imagem'}
            </button>
          </div>
        )}
      </div>

      <div className={styles['vistoria-button']}>
        {currentStep === 4 && hasBicycle ? (
          <button onClick={handleNextStep}>Concluir</button>
        ) : (
          <button
            onClick={handleNextStep}
            disabled={currentStep < 4 || !hasBicycle}
          >
            {isCapturing ? 'Aguarde...' : 'Próxima Etapa'}
          </button>
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Mensagem de Validação"
        className={styles['modal']}
      >
          <h2>Validação de Foto</h2>
          <p>{modalMessage}</p>
          <button onClick={handleNextStep}>Ok</button>
      </Modal>
    </div>
  );
};

export default Vistoria;