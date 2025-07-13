import { Link } from "react-router-dom";
import perfilImage from '../../assets/perfil.jpg'
import "./Home.css";

const Home = () => {
    return (
        <section className="home">
            <div className="overlay"></div>

            <div className="content">
                <div className="foto-container">
                    <div className="glow-ring"></div>
                    <img src={perfilImage} alt="minha foto" className="foto"/>
                </div>

                <div className="text-content">
                    <h1>Adriano <span>Santos</span></h1>
                    <h3>Desenvolvedor Full-Stack | React & PostgreSQL</h3>

                    <p className="pitch">
                        Transformo ideias em sistemas completos — de controle financeiro a PDV de vendas. 
                        Entrego soluções web rápidas, funcionais e sob medida para empresas e empreendedores.
                    </p>
                    <p className="pitch">
                        Precisa de alguém pra criar seu sistema, site ou app? Dá uma olhada nos meus projetos ou fala comigo agora!
                    </p>

                    <div className="buttons">
                        <Link to="/contato" className="btn">Falar comigo</Link>
                        <Link to="/projetos" className="btn-outline">Ver Projetos</Link>
                    </div>

                    <div className="social">
                        <a href="https://github.com/blood360" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/adrianosantosenigner/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://wa.me/5521997916447" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                        <a href="https://www.instagram.com/adriano_santosn?igsh=M2xjZ3A0ZWlsbWhz" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
