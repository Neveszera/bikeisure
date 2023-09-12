import './Login.css';

export default function Login(){
    
    return(
        <>
        <div class="center">
            <h1>Entrar</h1>
            <form method="post">
                <div class="txt_field">
                    <input type="email" required name="email" maxlength="40"/>
                    <span></span>
                    <label>Email</label>
                </div>

                <div class="txt_field">
                    <input type="password" required name="senha" maxlength="32"/>
                    <span></span>
                    <label>Senha</label>
                </div>

                <div class="pass">Esqueceu a senha? Clique aqui!</div>
                <input type="submit" value="Logar"/>
                <div class="signup_link">
                    Não tem uma conta? <a href="./cadastro.html">Cadastre-se</a>
                </div>
            </form>
        </div>
        </>
        
    );
}