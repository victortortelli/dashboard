import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { useHistory } from "react-router-dom";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/consulta",
});

export default function ListarConsulta() {
  const [data, setData] = useState([]);
  const history = useHistory();
  const columns = [
    { title: "ID Consulta", field: "id" },
    { title: "Cartão SUS", field: "cartaoSusPaciente" },
    { title: "Data", field: "data" },
    { title: "Urgência", field: "urgencia" },
    { title: "Status", field: "status" },
    
  ];

  useEffect(() => {
    fetch("http://localhost:3333/consulta")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  const excluirConsulta = ({id}) => {
    const r = window.confirm(`Deseja excluir a consulta com ID: ${id}?`);
    if (r === true) {
    api.delete(`/${id}`);
    history.push(`/inicio`);
    }
  };

  return (
    <div className="buscarPaciente">
      <MaterialTable
        title="Listar Consultas"
        data={data}
        columns={columns}

        actions={[
          {
            icon: "delete",
            tooltip: "Deletar",
            onClick: (event, rowData) => excluirConsulta(rowData)
          },
        ]}
      />
    </div>
  );
}
