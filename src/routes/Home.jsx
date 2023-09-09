export default function Home(){

    return(
        <>

            <section>
                <div><h1>Pedale com confiança, proteção em cada trajeto.</h1>
                <p>Na Bikeisure, oferecemos seguros abrangentes para proteger suas pedaladas e o que você mais ama.</p>
                <button><a href="#">Contratar Agora</a></button>
                </div>

            </section>

                        <section>
                <h1>Planos</h1>
                <div className="groupCard">
                    <div className="card">
                        <h3>Pedal essencial</h3>
                        <p>Reparo de câmaras de ar;</p>
                        <p>Reparo ou troca de correntes;</p>
                        <p>Substituição ou regulagem de selim e canote de selim;</p>
                        <p>Substituição e regulagem manetes de freios e cabo de aço;</p>
                        <p>Substituição ou regulagem de freio dianteiro e traseiro.</p>
                    </div>

                    <div className="card">
                        <h3>Pedal Leve</h3>
                        <p>Todas as coberturas do plano Pedal Essencial;</p>
                        <p>+</p>
                        <p>Lubrificação de correntes e coroas;</p>
                        <p>Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente.</p>
                    </div>

                    <div className="card">
                        <h3>Pedal Elite</h3>
                        <p>Todas as coberturas do plano Pedal Leve;</p>
                        <p>+</p>
                        <p>Transporte do segurado e Bike - limite de 150km, em caso de quebra ou acidente;</p>
                        <p>Instalação de suporte de parede e chão para bike;</p>
                        <p>Serviço de Leva e Traz, com limite de 50km, mediante agendamento prévio.</p>
                    </div>
                </div>
            </section>



        </>
    )
}