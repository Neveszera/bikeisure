import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/PlanosCarousel.css'

export default function PlanosCarousel() {
    return (
        <Carousel
            showArrows={true}
            renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title="Anterior"
                        className="carousel-button prev-button"
                    >
                        &lt;
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title="Próximo"
                        className="carousel-button next-button"
                    >
                        &gt;
                    </button>
                )
            }
        >
            <div className="plano-card">
                <h3>Pedal Essencial</h3>
                <p>Reparo de câmaras de ar;</p>
                <p>Reparo ou troca de correntes;</p>
                <p>Substituição ou regulagem de selim e canote de selim;</p>
                <p>Substituição e regulagem manetes de freios e cabo de aço;</p>
                <p>Substituição ou regulagem de freio dianteiro e traseiro.</p>
            </div>
            <div className="plano-card">
                <h3>Pedal Leve</h3>
                <p>Todas as coberturas do plano Pedal Essencial;</p>
                <p>+</p>
                <p>Lubrificação de correntes e coroas;</p>
                <p>Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente.</p>
            </div>
            <div className="plano-card">
                <h3>Pedal Elite</h3>
                <p>Todas as coberturas do plano Pedal Leve;</p>
                <p>+</p>
                <p>Transporte do segurado e Bike - limite de 150km, em caso de quebra ou acidente;</p>
                <p>Instalação de suporte de parede e chão para bike;Serviço de Leva e Traz, com limite de 50km, mediante agendamento prévio.</p>
                <p>Serviço de Leva e Traz, com limite de 50km, mediante agendamento prévio.</p>
            </div>
        </Carousel>
    );
}
