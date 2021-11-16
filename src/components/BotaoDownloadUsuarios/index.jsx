import React from "react";
import { CSVLink } from "react-csv";
import { useState, useEffect } from "react";
import "./styles.css";

export default function DownloadUsuarios() {

    const [data, setData] = useState([]); //para mostrar os dados atuais
    useEffect(() => {
      fetch("http://localhost:3333/usuarios")
        .then((resp) => resp.json())
        .then((resp) => setData(resp));
    }, []);

    const headers = [
      { label: "ID", key: "id" },
      { label: "Username", key: "username" },
      { label: "Role", key: "role" },
      { label: "Senha", key: "password" },
    ];

    const csvReport = {
      filename: "Lista_usuarios.csv",
      headers: headers,
      data: data,
    };

  return (
    <div>
      <button>
        <CSVLink {...csvReport}>Exportar Usuários</CSVLink>
      </button>
    </div>
  );
}
