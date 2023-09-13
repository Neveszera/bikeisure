import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaGithub } from 'react-icons/fa';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="social-links">
          <li>
            <a href="https://www.instagram.com/">
              <FaInstagram />
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <FaFacebook />
              Facebook
            </a>
          </li>
          <li>
            <a href="https://web.whatsapp.com/">
              <FaWhatsapp />
              WhatsApp
            </a>
          </li>
          <li>
            <a href="https://github.com/Neveszera/bikeisure">
              <FaGithub />
              GitHub
            </a>
          </li>
        </ul>
        <p>Endereço: Paulista, 1234</p>
        <p>Email: contato@bikeisure.com</p>
        <p>Telefone: (11) 91234-5678</p>
        <br />
        <p>&copy; {new Date().getFullYear()} Designer by: Os Remanescentes</p>
      </div>
    </footer>
  );
}

export default Footer;
