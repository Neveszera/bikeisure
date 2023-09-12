import React from 'react';
import { Link } from 'react-router-dom';
import Ciclista from '../../assets/img/ciclista.png';
import './Home.css';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={Ciclista} alt="Ciclista" />
        </div>
        <div className="hero-text">
          <h1>Pedale com confiança, proteção em cada trajeto.</h1>
          <p>Na Bikeisure, oferecemos seguros abrangentes para proteger suas pedaladas e o que você mais ama.</p>
          <Link to="/inicio">
            <button>Contratar Agora</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
