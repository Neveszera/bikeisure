import React from "react";
import { Link } from "react-router-dom";
import "./Error.css"; // Certifique-se de importar o arquivo Error.css com os estilos

export default function Error() {
  document.title = "Erro 404";

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">Erro 404</h1>
        <p className="error-message">Página não encontrada</p>
      </div>
      <div className="error-link">
        <Link to="/">Voltar para o início</Link>
      </div>
    </div>
  );
}
