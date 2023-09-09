export default function Login(){
    
    return(
        <div>
            <form>
            <h1>Login</h1>
            <label>
            Email: <input name="email" type="text" />
          </label>
          <label>
            Senha: <input name="senha" type="password" />
          </label>
          <Button href="#">Logar</Button>
            </form>
        </div>
    )
    
    }