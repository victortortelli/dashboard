import React from "react";
import { CSVLink } from "react-csv";
import { useState, useEffect } from "react";
import "./styles.css";

export default function DownloadConsultas() {

    const [data, setData] = useState([]); //para mostrar os dados atuais
    useEffect(() => {
      fetch("http://localhost:3333/consulta")
        .then((resp) => resp.json())
        .then((resp) => setData(resp));
    }, []);

    const headers = [
      { label: "ID", key: "id" },
      { label: "Data", key: "data" },
      { label: "Status", key: "status" },
      { label: "Urgencia", key: "urgencia" },
      { label: "Sintomas", key: "sintomas" },
      { label: "Diagnostico", key: "diagnostico" },
      { label: "Cartão SUS Paciente", key: "cartaoSusPaciente" },
    ];

    const csvReport = {
      filename: "Lista_Consultas.csv",
      headers: headers,
      data: data,
    };

  return (
    <div>
      <button>
        <CSVLink {...csvReport}>Exportar Consultas</CSVLink>
      </button>
    </div>
  );
}
