import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import MaterialTable from "material-table";
import axios from "axios";
import { useHistory } from "react-router";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default function BuscarReceita() {
  const [data, setData] = useState([]);

  const history = useHistory();

  const columns = [
    { title: "ID Receita", field: "id" },
    { title: "Descrição", field: "descricao" },
    { title: "Status", field: "status" },
    { title: "ID Consulta", field: "idConsulta" },
  ];

  useEffect(() => {
    fetch("http://localhost:3333/receita")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  const venderReceita = ({ idConsulta }) => {
    const r = window.confirm("Quer marcar a receita como 'Vendida'?");
    if (r === true) {
      api.put(`/receita/${idConsulta}`, {
        status: "Vendida",
      });
      history.push(`buscar_receita`);
    }
  };

  return (
    <div className="buscarPaciente">
      <MaterialTable
        title="Consultas Em Espera"
        data={data}
        columns={columns}
        actions={[
          {
            icon: "check",
            tooltip: "Vender",
            onClick: (event, rowData) => venderReceita(rowData),
          },
        ]}
      />
    </div>
  );
}
