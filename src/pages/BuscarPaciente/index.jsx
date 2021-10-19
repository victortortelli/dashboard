import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
//import { BrowserRouter as Route } from "react-router-dom";
import { useHistory, Link } from "react-router-dom";

export default function BuscarPaciente() {
  const [data, setData] = useState([]);

  const history = useHistory();

  const redirectEditar = () => {
    history.push(`/paciente/id/${data.cartaoSus}`);
  };

  const redirectNovaConsulta = () => {
    history.push(`/consulta/criar/${data.cartaoSus}`);
  }

  const columns = [
    { title: "Nome", field: "nome" },
    { title: "Data de Nascimento", field: "dataNasc" },
    { title: "RG", field: "rg" },
    { title: "Cartão SUS", field: "cartaoSus" },
  ];

  useEffect(() => {
    fetch("http://localhost:3333/paciente")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
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
            onClick: (event, rowData) => redirectNovaConsulta(),
          },
          {
            icon: "edit",
            tooltip: "Editar",
            onClick: (event, rowData) => redirectEditar(),
          },
        ]}
      />
      <Link
        to={{
          pathname: `/paciente/id/${data.cartaoSus}`,
          state: data.cartaoSus
        }}
       />
    </div>
  );
}
