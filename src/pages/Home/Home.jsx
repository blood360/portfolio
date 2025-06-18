import {Link} from "react-router-dom"; // Link já está importado, ótimo!
import "./Home.css"

const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>

            <div className="content">
                <h1>ADRIANO <span>SANTOS</span></h1>
                <h3>Desenvolvedor Full-Stack</h3>

                <div className="buttons">
                    {/* BOTÃO CONTATO: Usar Link para a rota /contato */}
                    <Link to="/contato" className="btn">Contato</Link>

                    {/* BOTÃO PROJETOS: Usar Link para a rota /projetos */}
                    <Link to="/projetos" className="btn-outline">Projetos</Link>
                </div>

                <div className="social">
                    {/* Adicionar rel="noopener noreferrer" a todos os target="_blank" */}
                    <a href="https://github.com/blood360" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/adrianosantosenigner/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://wa.me/5521997916447" target="_blank" rel="noopener noreferrer"><i className=" fab fa-whatsapp "></i></a>
                    <a href="https://www.instagram.com/adriano_santosn?igsh=M2xjZ3A0ZWlsbWhz" target="_blank" rel="noopener noreferrer"><i className=" fab fa-instagram "></i></a>
                </div>
            </div>
        </section>
    );
};

export default Home;