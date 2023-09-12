import React from 'react';
import HeroImage from '../assets/img/ciclista1'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Pedale com confiança, proteção em cada trajeto.</h1>
          <p>Na Bikeisure, oferecemos seguros abrangentes para proteger suas pedaladas e o que você mais ama.</p>
          <button><a href="#">Contratar Agora</a></button>
        </div>
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
