import React from "react";
import { CSVLink } from "react-csv";
import { useState, useEffect } from "react";
import "./styles.css";

export default function DownloadPacientes() {

    const [data, setData] = useState([]); //para mostrar os dados atuais
    useEffect(() => {
      fetch("http://localhost:3333/paciente")
        .then((resp) => resp.json())
        .then((resp) => setData(resp));
    }, []);

    const headers = [
      { label: "Número Cartão SUS", key: "cartaoSus" },
      { label: "Nome", key: "nome" },
      { label: "RG", key: "rg" },
      { label: "Data de Nascimento", key: "dataNasc" },
      { label: "Gênero", key: "genero" },
      { label: "Rua", key: "rua" },
      { label: "Bairro", key: "bairro" },
      { label: "Número", key: "numero" },
      { label: "Complemento", key: "complemento" },
      { label: "Cidade", key: "cidade" },
      { label: "Estado", key: "estado" },
      { label: "Escola", key: "escola" },
      { label: "Industria", key: "industria" },
      { label: "email", key: "Email" },
    ];

    const csvReport = {
      filename: "Lista_pacientes.csv",
      headers: headers,
      data: data,
    };

  return (
    <div>
      <button>
        <CSVLink {...csvReport}>Exportar Pacientes</CSVLink>
      </button>
    </div>
  );
}
