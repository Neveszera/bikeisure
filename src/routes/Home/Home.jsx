import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import Ciclista from '../../assets/img/ciclista.png';
import PlanosCarousel from '../../components/PlanosCarousel.jsx'
import './Home.css';

export default function Home() {
  return (
    <>
      <Header />

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

      <section className='planos'>
        <h1>Nossos Planos</h1>
        <PlanosCarousel />
      </section>

      <Footer />
    </>
  );
}
