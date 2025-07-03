import { useEffect, useState } from "react";
import api from "../services/api";

export function useProjetos() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarProjetos() {
      try {
        const res = await api.get("/projetos");
        setProjetos(res.data);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarProjetos();
  }, []);

  return { projetos, loading };
}
