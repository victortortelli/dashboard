import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { useHistory } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default function BuscarUsuario() {
  const [data, setData] = useState([]);

  const columns = [
    { title: "Username", field: "username" },
    { title: "Role", field: "role" },
  ];

  useEffect(() => {
    api
      .get("/usuarios")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  return (
    <div className="buscarPaciente">
      <MaterialTable
        title="Buscar Usuários"
        data={data}
        columns={columns}
        actions={[
          {
            icon: "delete",
            tooltip: "Deletar",
            //onClick: (event, rowData) => redirectNovaConsulta(rowData),
          },
          {
            icon: "edit",
            tooltip: "Alterar senha",
            //onClick: (event, rowData) => redirectEditar(rowData),
          },
        ]}
      />
    </div>
  );
}
