import React from 'react';
import './Contato.css';

export default function Contato() {
  return (
    <div className="contato-container">
      <div className="contato-text">
        <h2>Entre em Contato</h2>
        <p>Estamos aqui para ajudar. Envie-nos uma mensagem e entraremos em contato o mais rápido possível.</p>
      </div>
      <div className="contato-form">
        <form>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome"  />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" />
          </div>
          <div className="form-group">
            <label htmlFor="assunto">Assunto</label>
            <input type="text" id="assunto" name="assunto" />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows="4" ></textarea>
          </div>
          <button type="submit">Envie sua Dúvida</button>
        </form>
      </div>
    </div>
  );
}
