import { Link } from "react-router-dom";

export default function Error() {

  document.title = "Erro 404";

  return (
    <div>
      <h1>Página não encontrada - 404</h1>
      <p>Voltar para o início - <Link to="/">VOLTAR</Link></p>
    </div>
  )
}