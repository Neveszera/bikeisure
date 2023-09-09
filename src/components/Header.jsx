import { Link } from "react-router-dom";


function Header() {
  

    return (
      <>
      <header>
            <ul>
                <Link to="/">Início</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="">Contato</Link>
                <Link to="/login">Entrar</Link>
            </ul>
        </header>
      </>
    )
  }
  
  export default Header