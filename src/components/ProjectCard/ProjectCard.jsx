import React from 'react';
import './ProjectCard.css'; // Crie um CSS para o seu ProjectCard se precisar

function ProjectCard({ title, description, technologies, siteUrl, codeUrl, imageUrl, imageAlt, reverseLayout }) {
    return (
        <div className={`project-card ${reverseLayout ? 'reverse' : ''}`}>
            <div className="text-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <p><strong>Tecnologias: </strong>{technologies}</p>
                <div className="buttons">
                    <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="btn primary">Acessar site</a>
                    <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="btn secondary">Código fonte</a>
                </div>
            </div>
            <div className="image-content">
                <img src={imageUrl} alt={imageAlt} />
            </div>
        </div>
    );
}

export default ProjectCard;