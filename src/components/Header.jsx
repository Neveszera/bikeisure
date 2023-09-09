import { Link } from "react-router-dom";


function Header() {
  

    return (
      <>
       <header>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="">Processo</Link></li>
                <li><Link to="">Planos</Link></li>
                <li><Link to="">Contato</Link></li>
                <li><Link to="/login">Entrar</Link></li>
            </ul>
        </header>
      </>
    )
  }
  
  export default Header