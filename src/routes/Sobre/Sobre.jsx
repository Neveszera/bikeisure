import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Ciclista2 from '../../assets/img/ciclista2.png';
import Neves from '../../assets/img/equipe/Neves.jpg'
import Renata from '../../assets/img/equipe/Renata.jpeg'

import './Sobre.css';


const membrosDaEquipe = [
    {
        id: 1,
        nome: "Renata Belila",
        rm: "RM552315",
        turma: "1TDSPG",
        funcao: "Database Developer",
        linkedin: 'https://www.linkedin.com/in/renata-belila-b99110260/',
        cor: "#479f57",
        instagram: 'https://www.instagram.com/renata_belila/',
        github: '',
        imagem: Renata,
    },
    {
        id: 2,
        nome: "Gabriel Neves",
        rm: "RM552244",
        turma: "1TDSPM",
        funcao: "Web Developer",
        linkedin: 'https://www.linkedin.com/in/-gabriel-neves/',
        instagram: 'https://instagram.com/neveeszera?igshid=NGVhN2U2NjQ0Yg==',
        github: 'https://github.com/Neveszera',
        imagem: Neves,
    },
    {
        id: 3,
        nome: "Rafael Henrique",
        rm: "RM552422",
        turma: "1TDSPM",
        funcao: "Web Developer",
        linkedin: 'https://www.linkedin.com/in/rafael-henrique-de-mendon%C3%A7a-51263326b/',
        instagram: 'https://www.instagram.com/rafaelhm015/',
        github: 'https://github.com/rhmendonca',
        imagem: Neves,
    },
    {
        id: 4,
        nome: "Daniel Stuart",
        rm: "RM",
        turma: "1TDSPI",
        funcao: "Java Developer",
        linkedin: '#',
        instagram: '#',
        github: '#',
        imagem: Neves,
    },
    {
        id: 5,
        nome: "Gabriel Sampaio",
        rm: "RM",
        turma: "1TDSPI",
        funcao: "",
        linkedin: '#',
        instagram: '#',
        github: '#',
        imagem: Neves,
    },
];

export default function Sobre() {

    return (
        <>
            <Header />
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

            <section className="equipe">
                {membrosDaEquipe.map((membro) => (
                    <div className="card" style={{ backgroundColor: membro.cor }} key={membro.id}>
                        <img src={membro.imagem} alt={`Foto de ${membro.nome}`} />
                        <h3>{membro.nome}</h3>
                        <p>{membro.rm}</p>
                        <p>{membro.turma}</p>
                        <p>{membro.funcao}</p>
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
            <Footer />
        </>

    );
}
