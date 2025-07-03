const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

// Configuração da conexão com PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "portfolio_admin",
  password: "ai3010",
  port: 5432,
});

app.use(cors());
app.use(express.json());

// Rota para login
app.post("/login", async (req, res) => {
  const { usuario, senha } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM usuarios WHERE usuario = $1 AND senha = $2",
      [usuario, senha]
    );

    if (result.rows.length > 0) {
      // Você pode gerar um token JWT aqui, mas pra simplificar, vamos mandar só true
      res.json({ sucesso: true, token: "dummy-token" });
    } else {
      res.json({ sucesso: false });
    }
  } catch (err) {
    res.status(500).json({ sucesso: false, error: err.message });
  }
});


// Rotas projetos
app.get("/projetos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projetos ORDER BY criado_em DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/projetos", async (req, res) => {
  const { titulo, descricao, tecnologias, link, imagemUrl } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO projetos (titulo, descricao, tecnologias, link, imagem_url, criado_em) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *",
      [titulo, descricao, tecnologias, link, imagemUrl]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/projetos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM projetos WHERE id = $1", [id]);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rotas métricas
app.post("/metricas", async (req, res) => {
  const { tipo, projetoId } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO metricas (tipo, projeto_id, criado_em) VALUES ($1, $2, NOW()) RETURNING *",
      [tipo, projetoId]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/metricas", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM metricas ORDER BY criado_em DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Sobe o servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
