import React from "react";
import { CSVLink } from "react-csv";
import { useState, useEffect } from "react";
import "./styles.css";

export default function DownloadReceitas() {

    const [data, setData] = useState([]); //para mostrar os dados atuais
    useEffect(() => {
      fetch("http://localhost:3333/receita")
        .then((resp) => resp.json())
        .then((resp) => setData(resp));
    }, []);

    const headers = [
      { label: "ID", key: "id" },
      { label: "Descrição", key: "descricao" },
      { label: "Status", key: "status" },
      { label: "Farmácia", key: "farmacia" },
      { label: "ID Consulta", key: "idConsulta" },
    ];

    const csvReport = {
      filename: "Lista_receitas.csv",
      headers: headers,
      data: data,
    };

  return (
    <div>
      <button>
        <CSVLink {...csvReport}>Exportar Receitas</CSVLink>
      </button>
    </div>
  );
}
