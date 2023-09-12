import React from 'react';
import Ciclista2 from '../../assets/img/ciclista2.png';
import Neves from '../../assets/img/equipe/Neves.jpg'
import './Sobre.css';


const membrosDaEquipe = [
    {
        id: 1,
        nome: "Gabriel Neves",
        rm: "RM552244",
        turma: "1TDSPM",
        funcao: "Web Developer",
        linkedin: '#',
        instagram: '#',
        github: 'https://github.com/Neveszera',
        imagem: Neves,
    },
    {
        id: 2,
        nome: "Gabriel Neves",
        rm: "RM552244",
        turma: "1TDSPM",
        funcao: "Web Developer",
        linkedin: '#',
        instagram: '#',
        github: 'https://github.com/Neveszera',
        imagem: Neves,
    },
    {
        id: 3,
        nome: "Gabriel Neves",
        rm: "RM552244",
        turma: "1TDSPM",
        funcao: "Web Developer",
        linkedin: '#',
        instagram: '#',
        github: 'https://github.com/Neveszera',
        imagem: Neves,
    },
    {
        id: 4,
        nome: "Gabriel Neves",
        rm: "RM552244",
        turma: "1TDSPM",
        funcao: "Web Developer",
        linkedin: '#',
        instagram: '#',
        github: 'https://github.com/Neveszera',
        imagem: Neves,
    },
    {
        id: 5,
        nome: "Gabriel Neves",
        rm: "RM552244",
        turma: "1TDSPM",
        funcao: "Web Developer",
        linkedin: '#',
        instagram: '#',
        github: 'https://github.com/Neveszera',
        imagem: Neves,
    },
];

export default function Sobre() {

    return (
        <>
            <section className="sobre">
                <div className="sobre-content">
                    <div className="sobre-text">
                        <h1>Sobre a Bikeisure</h1>
                        <p>
                            A Bikeisure oferece proteção confiável e personalizada para ciclistas em todo o país. Nosso compromisso com a excelência, integridade e inovação nos torna a escolha ideal para quem busca segurança durante suas pedaladas.
                        </p>
                        <p>
                            Nossa visão é ser líder no setor, fornecendo soluções adaptadas às necessidades individuais dos ciclistas. Entre em contato conosco e desfrute de uma proteção completa para suas pedaladas, com o atendimento personalizado que você merece.
                        </p>
                    </div>
                    <div className="sobre-image">
                        <img src={Ciclista2} alt="Desenho Ciclista" />
                    </div>
                </div>
            </section>
            <h1>Equipe Bikeisure</h1>
            <section className="equipe">
                {membrosDaEquipe.map((membro) => (
                    <div className="card" style={{ backgroundColor: membro.cor }} key={membro.id}>
                        <img src={membro.imagem} alt={`Foto de ${membro.nome}`} />
                        <h3>{membro.nome}</h3>
                        <p>RM: {membro.rm}</p>
                        <p>Turma: {membro.turma}</p>
                        <p>Função: {membro.funcao}</p>
                        <div className="redes-sociais">
                            <a href={membro.linkedin} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href={membro.instagram} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href={membro.github} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </section>

        </>

    );
}
