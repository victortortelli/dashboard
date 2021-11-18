import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { useHistory } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default function BuscarPaciente() {
  const [data, setData] = useState([]);

  const history = useHistory();

  const redirectEditar = ({cartaoSus}) => {
    history.push({
      pathname: '/paciente/id/',
      search: `?cartaoSus=${cartaoSus}`      
    });
  };

  const redirectNovaConsulta = ({cartaoSus}) => {
    history.push({
      pathname: '/consulta/criar/',
      search: `?cartaoSus=${cartaoSus}`      
    });
  }

  const columns = [
    { title: "Nome", field: "nome" },
    { title: "Data de Nascimento", field: "dataNasc" },
    { title: "RG", field: "rg" },
    { title: "Cartão SUS", field: "cartaoSus" },
  ];

  useEffect(() => {  
    api.get("/paciente")
    .then((response) => setData(response.data))
    .catch((err) =>{
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

  return (
    <div className="buscarPaciente">
      <MaterialTable
        title="Buscar Paciente"
        data={data}
        columns={columns}
        actions={[
          {
            icon: "add",
            tooltip: "Nova Consulta",
            onClick: (event, rowData) => redirectNovaConsulta(rowData),
          },
          {
            icon: "edit",
            tooltip: "Editar",
            onClick: (event, rowData) => redirectEditar(rowData),
          },
        ]}
      />
    </div>
  );
}
