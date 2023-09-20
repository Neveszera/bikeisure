import React, { useState } from 'react';
import './css/Faq.css';

export default function Faq() {
    const faqItems = [
        {
            question: 'Tem aceitação para bicicletas montadas/personalizadas?',
            answer:
                'Sim, temos aceitação para bicicletas que tiverem seus componentes alterados ou personalizadas pelo próprio segurado, desde que em eventual sinistro, tenha comprovação da aquisição de todos os componentes. Sempre que houver uma nova alteração de peças que altere o valor total da bicicleta, um endosso deverá ser realizado no LMI (limite máximo de indenização) de contratação.',
        },
        {
            question: 'Posso contratar o seguro de bike para bicicleta usada?',
            answer:
                'Aceitamos bicicletas usadas com até 8 anos de uso, e para bicicletas elétricas, até 3 anos de uso. Neste caso, sugerimos que a contratação ocorra pelo valor de mercado da bike usada.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className='faq'>
            <h1>Perguntas Frequentes</h1>
            {faqItems.map((item, index) => (
                <div className='faq-item' key={index}>
                    <h3
                        className={`faq-question ${
                            activeIndex === index ? 'active' : ''
                        }`}
                        onClick={() => toggleAnswer(index)}
                    >
                        {item.question}
                    </h3>
                    <p
                        className={`faq-answer ${
                            activeIndex === index ? 'active' : ''
                        }`}
                    >
                        {item.answer}
                    </p>
                </div>
            ))}
        </section>
    );
}
