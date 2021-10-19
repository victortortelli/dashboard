import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { BrowserRouter as Route } from "react-router-dom";

export default function AtenderConsulta() {
  const [data, setData] = useState([]);

  const columns = [
    { title: "ID Consulta", field: "id" },
    { title: "Cartão SUS", field: "cartaoSusPaciente" },
    { title: "Data", field: "data" },
    { title: "Urgência", field: "urgencia" },
    { title: "Status", field: "status" },
  ];

  useEffect(() => {
    fetch("http://localhost:3333/consulta_fila_atendimento")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  

  return (
    <div className="buscarPaciente">
      <MaterialTable
        title="Selecionar consulta para atender"
        data={data}
        columns={columns}
        actions={[
          {
            icon: "check",
            tooltip: "Editar",
            onClick: (event, rowData) => <Route path="/cadastrar_pacientes/" />,
          },
        ]}
      />
    </div>
  );
}
