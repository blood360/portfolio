import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard'; // Ajuste o caminho conforme sua estrutura
import './Projetos.css';

// Importe as imagens diretamente para que o Vite/Webpack as processe corretamente
import salaoImage from '../../assets/projeto-salao.png';
import agendaImage from '../../assets/Projeto-agenda.png';
import inicioImage from '../../assets/inicio.png';
import financeiroImage from '../../assets/financeiro.png';

export default function Projetos() {
    // Crie um array de objetos com os dados dos seus projetos
    const projects = [
        {
            title: "Sistema de agendamento para salão de beleza",
            description: "Site desenvolvido para marcação de horário em salão. O sistema permite o recebimento de um e-mail de confirmação contendo o horário, o valor, o serviço e até o profissional que irá atender.",
            technologies: "HTML, CSS, JavaScript, EmailJS",
            siteUrl: "https://blood360.github.io/agenda-salao/",
            codeUrl: "https://github.com/blood360/agenda-salao",
            imageUrl: salaoImage,
            imageAlt: "Interface do sistema de agendamento para salão de beleza", // Alt text descritivo
            layout: 'normal'
        },
        {
            title: "Agenda inteligente",
            description: "Aplicação web de uma agenda inteligente que apresenta a porcentagem de tarefas concluídas.",
            technologies: "JavaScript, React, CSS",
            siteUrl: "https://agenda-inteligente-react.vercel.app/",
            codeUrl: "https://github.com/blood360/agenda-inteligente-react",
            imageUrl: agendaImage,
            imageAlt: "Captura de tela da aplicação web Agenda Inteligente", // Alt text descritivo
            layout: 'reverse' // Se quiser alternar o layout
        },
        {
            title: "Gerenciador de estoque",
            description: "Aplicação para gerenciar o estoque de produtos, permitindo adicionar, remover e visualizar itens, e um PDV de vendas com descontos, juros do cartão de crédito e muito mais",
            technologies: "Frontend(React, Node.js, Vite, React-Router-Dom, Axios, HTML, CSS, JavaScript), Backend(Node.js, Express, Node-PostgreSQL, JWT) Banco de dados (PostrageSQL, JWT)",
            siteUrl: "https://",
            codeUrl: "https://",
            imageUrl: inicioImage,
            imageAlt: "Captura de tela do gerenciador de estoque", 
            layout: 'normal' 
        },
        {
            title: "Controle financeiro",
            description: "Sistema de contole financeiro que permite o registro de receitas e despesas, categorização de transações e geração de relatórios financeiros.",
            technologies: "JavaScript, React, Node.js, Express, HTML, CSS",
            siteUrl: "https://controle-de-gastos-tawny.vercel.app/login",
            codeUrl: "https://github.com/blood360/controle-de-gastos",
            imageUrl: financeiroImage,
            imageAlt: "Captura de tela do controle financeiro",
            layout: 'normal' 
        }
        // Adicione mais projetos aqui
    ];

    return (
        <div className="projetos-page"> {/* Use uma classe mais específica para a página */}
            <main className="projects-container"> {/* Container para os cards de projeto */}
                <h2>Meus Projetos</h2> {/* Título principal da página */}
                <p className="page-intro">Explore alguns dos meus trabalhos e veja as tecnologias que utilizei.</p>

                {/* Mapeie sobre o array de projetos para renderizar cada ProjectCard */}
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index} // Use uma key única para cada item na lista (melhor usar um ID real do projeto se tiver)
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        siteUrl={project.siteUrl}
                        codeUrl={project.codeUrl}
                        imageUrl={project.imageUrl}
                        imageAlt={project.imageAlt}
                        reverseLayout={project.layout === 'reverse'} // Passa a prop para alternar layout
                    />
                ))}
            </main>
        </div>
    );
}