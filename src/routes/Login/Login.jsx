import './Login.css';

export default function Login() {

  return (
    <>
      <section>
        <div className="center">
          <h1>Entrar</h1>
          <form method="post">
            <div className="txt_field">
              <input type="email" required name="email" maxLength="40" />
              <span></span>
              <label>Email</label>
            </div>

            <div className="txt_field">
              <input type="password" required name="senha" maxLength="32" />
              <span></span>
              <label>Senha</label>
            </div>

            <div className="pass">Esqueceu a senha? Clique aqui!</div>
            <input type="submit" value="Logar" />
            <div className="signup_link">
              Não tem uma conta? <a href="./cadastro.html">Cadastre-se</a>
            </div>
          </form>
        </div>
      </section>

    </>

  );
}