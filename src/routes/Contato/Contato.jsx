export default function Contato(){

    return(
        <>
            <div>
                
                <form>
                    <h1>Entre em contato </h1>
                    <input type="text" name="nome" id="nome" placeholder="Seu Nome"/>
                    <input type="email" name="email" id="email"  placeholder="Seu Email"/>
                    <input type="text" name="tel" id="telefone" placeholder="informe eu Telefone" />
                    <textarea name="" id="" cols="30" rows="2" placeholder="Seu Assunto"></textarea>
                    <input type="submit" value="Envie sua dúvida" />
                </form>
            </div>

        </>
    )
}