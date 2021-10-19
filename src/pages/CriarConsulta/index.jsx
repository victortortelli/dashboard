import React from "react";
import { useState } from "react";
import axios from "axios";
import "./styles.css";
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";

const api = axios.create({
  baseURL: "http://localhost:3333/consulta",
});

export default function CriarConsulta() {
  const [data, setData] = useState({
    data: "",
    status: "Em espera",
    urgencia: "",
    cartaoSusPaciente: "",
    // sintomas: "",
    // diagnostico: "",
    // permitir edição apenas pela tela do médico
  });

  const history = useHistory();

  const redirectFila = () => {
    history.push(`/consulta/lista`);
  };

  function submit(e) {
    e.preventDefault();
    api.post("/", {
      data: data.data,
      status: data.status,
      urgencia: data.urgencia,
      cartaoSusPaciente: data.cartaoSusPaciente,
      //   sintomas: data.sintomas,
      //   diagnostico: data.diagnostico,
      // permitir edição apenas pela tela do médico
    });
    redirectFila();
    // console.log(data.data, data.status, data.urgencia, data.cartaoSusPaciente)
  }

  

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div className="cadastrarPacienteWrapper">
      <h1 className="cadastrarPacienteTitulo">Criar Nova Consulta</h1>
      <form
        onSubmit={(e) => submit(e)}
        action=""
        className="cadastrarPacienteForm"
      >
        <div className="cadastrarPacienteItem">
          <label>Número Cartão SUS</label>
          <InputMask
            mask="999 9999 9999 9999"
            maskChar=""
            defaultvalue={data.cartaoSusPaciente}
            onChange={(e) => handle(e)}
            //adicionar verificação de cartão Sus
            type="text"
            id="cartaoSusPaciente"
            placeholder="000 0000 0000 0000"
          />
        </div>

        <div className="cadastrarPacienteItem">
          <label>Data</label>
          <input
            onChange={(e) => handle(e)}
            id="data"
            value={data.data}
            type="date"
          />
        </div>

        {/* <div className="cadastrarPacienteItem">
          <label>Status</label>
          <input
            onChange={(e) => handle(e)}
            id="status"
            value={data.status}
            type="text"
            defaultValue="Aberta"
          />
          <select
            onChange={(e) => handle(e)}
            value={data.status}
            name="status"
            id="status"
            defaultValue="Em espera"
          >
            <option value="Em espera">Em espera</option>
            <option value="Em espera">Em espera</option>
            <option value="Em espera">Em espera</option>
          </select>
        </div> */}

        <div className="cadastrarPacienteItem">
          <label>Urgência</label>
          <select
            onChange={(e) => handle(e)}
            value={data.urgencia}
            name="urgencia"
            id="urgencia"
            className="cadastrarPacienteEstado"
          >
            <option value="nu">Não Urgente</option>
            <option value="pu">Pouco Urgente</option>
            <option value="ur">Urgente</option>
            <option value="mu">Muito Urgente</option>
            <option value="em">Emergência</option>
          </select>
        </div>
        <button className="cadastrarPacienteBotao">Criar</button>
      </form>
    </div>
  );
}
