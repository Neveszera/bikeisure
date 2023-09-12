import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className={`nav_header ${menuOpen ? 'active' : ''}`}>
        <div className="logo">
          <h1>Bikeisure</h1>
          <button className={`nav_toggle ${menuOpen ? 'active' : ''}`} aria-expanded={menuOpen} aria-label="menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={`nav_menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/login">Entrar</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
