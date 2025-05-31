import "./Projetos.css"

export default function Projetos() {
    return (
        <div>
            

            <main className="hero">
                <div className="text-content">
                    <p>veja meus projeto</p>
                    <hr />
                    <h3>Sistema de agendamento para salão de beleza</h3>
                    <p>Site desenvolvido para marcação de horario em salão. O sistema permite o recebimento de um e-mail confirmação contendo o horário, o valor, o serviço e até o profissional que irá atender</p>
                    <p><strong> Tecnologias: </strong>HTML, CSS, JavaScript, EmailJS</p>
                    <hr />

                    <div className="buttons">
                        <a href="https://blood360.github.io/agenda-salao/" target="_blank" className="bt primary">Acessar site</a>
                        <a href="https://github.com/blood360/agenda-salao" target="_blank" className="btn secondary">Código fonte</a>
                    </div>
                </div>

                <div className="image-content">
                    <img src="src/assets/projeto-salao.png"/>
                </div>

                <div className="text-content">
                    <hr />
                    <h3>Agenda inteligente</h3>
                    <p>aplicação web de  uma agenda inteligente que apresenta a porcentagem de tarfeas concluidas.</p>
                    <p> <strong>Tecnologias: </strong> JavaScript, react, CSS</p>

                    <div className="buttons">
                        <a href="https://agenda-inteligente-react.vercel.app/" target="_blank" className="btn primary">Acessar aplicação</a>
                        <a href="https://github.com/blood360/agenda-inteligente-react" target="_blank" className="btn secondary">Código fonte</a>
                    </div>

                    <div className="image-content">
                        <img src="src/assets/projeto-agenda.png" />
                    </div>

                </div>

            </main>
        </div>
    );
};
