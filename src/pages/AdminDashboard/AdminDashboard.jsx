import React, { useState } from "react";
import api from "../../services/api";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [link, setLink] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoProjeto = {
      titulo,
      descricao,
      link,
      imagem,
    };

    try {
      await api.post("/projetos", novoProjeto);
      alert("Projeto adicionado com sucesso!");
      setTitulo("");
      setDescricao("");
      setLink("");
      setImagem("");
    } catch (err) {
      console.error("Erro ao adicionar projeto:", err);
      alert("Erro ao salvar projeto.");
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Cadastrar Projeto</h2>
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />

        <label>Descrição:</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <label>Link:</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />

        <label>Imagem (URL):</label>
        <input
          type="text"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          required
        />

        <button type="submit">Salvar Projeto</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
