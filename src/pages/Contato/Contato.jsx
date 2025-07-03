import "./Contato.css"

const Contato = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const telefone = e.target.telefone.value;
    const email = e.target.email.value;
    const mensagem = e.target.mensagem.value;

    const texto = `Olá, me chamo ${nome}!\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagem}`;

    const url = `https://wa.me/5521997916447?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

    // limpa o formulário após o envio
    e.target.reset();
  };

  return (
    <section className="contato" id="contato">
      <div className="overlay"></div>

      <div className="container">
        <h2>Contato</h2>
        <p>Estou disponível para projetos freelancer, colaborações, estágios ou vagas de trabalho.</p>

        <div className="dados">
          <p><strong>Endereço:</strong><br /> Mauá - Magé</p>
          <p><strong>Whatsapp: </strong>(21)98086-7488</p>
          <p><strong>E-mail: </strong>adrianocarvalhonav@gmail.com</p>
        </div>

        <div className="social">
          <a href="https://github.com/blood360" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/adrianosantosenigner/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/adriano_santosn?igsh=M2xjZ3A0ZWlsbWhz" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://wa.me/5521980867488" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      <div className="formulario">
        <h2>Entre em contato</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nome" placeholder=" Seu nome" required />
          <input type="tel" name="telefone" placeholder="Seu telefone" required />
          <input type="email" name="email" placeholder="Seu E-mail" required/>
          <textarea name="mensagem" placeholder="Mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
