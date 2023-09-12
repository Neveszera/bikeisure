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

      <section className='faq'>
        <h1>Perguntas Frequentes</h1>
        <div className='faq-item'>
          <h3>Tem aceitação para bicicletas montadas/personalizadas?</h3>
          <p>Sim, temos aceitação para bicicletas que tiverem seus componentes alterados ou personalizadas pelo próprio segurado, desde que em eventual sinistro, tenha comprovação da aquisição de todos os componentes. Sempre que houver uma nova alteração de peças que altere o valor total da bicicleta, um endosso deverá ser realizado no LMI (limite máximo de indenização) de contratação.</p>
        </div>
        <div className='faq-item'>
          <h3>Posso contratar o seguro de bike para bicicleta usada?</h3>
          <p>Aceitamos bicicletas usadas com até 8 anos de uso, e para bicicletas elétricas, até 3 anos de uso. Neste caso, sugerimos que a contratação ocorra pelo valor de mercado da bike usada.</p>
        </div>
        {/* Adicione mais perguntas frequentes conforme necessário */}
      </section>

      <Footer />
    </>
  );
}
