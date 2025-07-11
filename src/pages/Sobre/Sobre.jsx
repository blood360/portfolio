import React, { useState } from 'react';

import './Sobre.css'; // Você pode colocar seus estilos aqui ou usar Tailwind

const skills = [
  {
    id: 'engenharia',
    name: 'Engenharia de Software',
    img: '/assets/engenharia.jpg',
    description:
      'Iniciei o curso em fevereiro de 2025 com previsão de conclusão em junho de 2029. Paralelo a isso estou sempre buscando capacitação por fora com cursos extras visando meu aprimoramento profissional. Estou em busca de estágio para melhorar ainda mais meus conhecimentos técnicos e ser um bom profissional.',
  },
  {
    id: 'python',
    name: 'Python',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    description:
      'Comecei com Python por sua simplicidade e clareza, explorando desde scripts simples até automações e análise de dados. Aprendi sobre estruturas de dados, orientação a objetos e bibliotecas como Pandas e Flask.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    description:
      'JavaScript foi meu ponto de virada para tornar páginas interativas e dinâmicas. Desde os primeiros scripts até uso de funções assíncronas, manipulação de DOM e APIs. É a base do meu desenvolvimento front-end.',
  },
  {
    id: 'html',
    name: 'HTML',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    description:
      'Comecei com HTML aprendendo estrutura semântica e boas práticas. Hoje uso como base sólida para interfaces organizadas e acessíveis.',
  },
  {
    id: 'css',
    name: 'CSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    description:
      'Minha jornada com CSS começou complementando o HTML. Dominei Flexbox, Grid, animações, responsividade e crio layouts modernos com foco em usabilidade.',
  },
  {
    id: 'angular',
    name: 'Angular',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
    description:
      'Conheci o Angular quando busquei criar aplicações web escaláveis com arquitetura bem definida. Aprendi a construir interfaces dinâmicas, usar rotas, serviços e componentes reutilizáveis.',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
    description:
      'MySQL foi meu primeiro contato com banco de dados relacional. Aprendi a modelar tabelas, escrever queries eficientes, usar JOINs, constraints e normalização.',
  },
  {
    id: 'github',
    name: 'GitHub',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    description:
      'GitHub é minha central de versionamento e colaboração. Aprendi a usar commits, branches e pull requests para organizar meus projetos e manter um histórico limpo.',
  },
  {
    id: 'nodejs',
    name: 'NodeJS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
    description:
      'Com o Node.js expandi meu conhecimento para o lado servidor. Aprendi a criar APIs, trabalhar com Express, lidar com banco de dados e construir back-ends completos.',
  },
];

const Sobre = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSelectSkill = (skill) => {
    setSelectedSkill(skill);
  };

  const handleBack = () => {
    setSelectedSkill(null);
  };

  return (

    
    <div className="sobre-container">
      <section className="about-section">
        <h1>Sobre mim</h1>
        <p>
            Sou Adriano Santos, desenvolvedor Full-Stack apaixonado por tecnologia e inovação. Atualmente, curso Engenharia de Software e estou em constante aprimoramento com cursos extras, bootcamps e projetos próprios. Meu foco é entregar soluções eficientes, escaláveis e que gerem valor real.
            Busco sempre evoluir tanto no front-end quanto no back-end, e estou aberto a oportunidades que me desafiem e ecelerem meu crescimento profissional.
        </p>
        <a href="/assets/Curriculo-adriano-engenharia" className="btn-download">Baixar Curriculo</a>
      </section>

      {!selectedSkill ? (
        <section className="skills-gallery">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="skill-item"
              onClick={() => handleSelectSkill(skill)}
            >
              <img src={skill.img} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </section>
      ) : (
        <div className="skill-detail-view active">
          <img
            src={selectedSkill.img}
            alt={selectedSkill.name}
            className="selected-image"
          />
          <div className="skill-info">
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.description}</p>
          </div>
        </div>
      )}

      {selectedSkill && (
        <button className="back-button" onClick={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 1-.5.5H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L3.707 7.5H14.5a.5.5 0 0 1 .5.5z"
            />
            </svg>
        </button>
      )}
    </div>

  );
};

export default Sobre;
