import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projetos.css';

import salaoImage from '../../assets/projeto-salao.png';
import agendaImage from '../../assets/Projeto-agenda.png';
import inicioImage from '../../assets/inicio.png';
import financeiroImage from '../../assets/financeiro.png';

export default function Projetos() {
    const projects = [
        {
            title: "Sistema de agendamento para salão de beleza",
            description: "Site desenvolvido para marcação de horário em salão. O sistema permite o recebimento de um e-mail de confirmação contendo o horário, o valor, o serviço e até o profissional que irá atender.",
            technologies: "HTML, CSS, JavaScript, EmailJS",
            siteUrl: "https://blood360.github.io/agenda-salao/",
            codeUrl: "https://github.com/blood360/agenda-salao",
            imageUrl: salaoImage,
            imageAlt: "Interface do sistema de agendamento para salão de beleza",
            layout: 'normal'
        },
        {
            title: "Agenda inteligente",
            description: "Aplicação web de uma agenda inteligente que apresenta a porcentagem de tarefas concluídas.",
            technologies: "JavaScript, React, CSS",
            siteUrl: "https://agenda-inteligente-react.vercel.app/",
            codeUrl: "https://github.com/blood360/agenda-inteligente-react",
            imageUrl: agendaImage,
            imageAlt: "Captura de tela da aplicação web Agenda Inteligente",
            layout: 'reverse'
        },
        {
            title: "Gerenciador de estoque com PDV",
            description: "Aplicação para gerenciar o estoque de produtos, permitindo adicionar, remover e visualizar itens. Possui PDV com cálculo automático de juros e descontos em vendas por cartão.",
            technologies: "React, Node.js, Vite, Express, PostgreSQL, JWT",
            siteUrl: "#", // Substitua quando fizer o deploy
            codeUrl: "#", // Substitua pelo link do repositório
            imageUrl: inicioImage,
            imageAlt: "Captura de tela do gerenciador de estoque",
            layout: 'normal'
        },
        {
            title: "Controle financeiro",
            description: "Sistema de controle financeiro que permite o registro de receitas e despesas, categorização de transações e geração de relatórios.",
            technologies: "JavaScript, React, Node.js, Express, HTML, CSS",
            siteUrl: "https://controle-de-gastos-tawny.vercel.app/login",
            codeUrl: "https://github.com/blood360/controle-de-gastos",
            imageUrl: financeiroImage,
            imageAlt: "Captura de tela do controle financeiro",
            layout: 'normal'
        }
    ];

    return (
        <div className="projetos-page">
            <main className="projects-container">
                <h2>Meus Projetos</h2>
                <p className="page-intro">
                    Aqui estão soluções reais que desenvolvi — de sistemas financeiros a ferramentas para agendamentos.  
                    Cada projeto resolve um problema prático e mostra como transformo código em resultado.
                </p>

                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        siteUrl={project.siteUrl}
                        codeUrl={project.codeUrl}
                        imageUrl={project.imageUrl}
                        imageAlt={project.imageAlt}
                        reverseLayout={project.layout === 'reverse'}
                    />
                ))}

                {/* Call to Action ao final */}
                <div className="cta-final">
                    <h3>Tem um projeto em mente?</h3>
                    <p>Fala comigo e vamos transformar sua ideia em um sistema de verdade.</p>
                    <Link to="/contato" className="btn">Entrar em contato</Link>
                </div>
            </main>
        </div>
    );
}
