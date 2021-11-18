import React from "react";
import { useState } from "react";
import axios from "axios";
import "./styles.css";

const api = axios.create({
  baseURL: "http://localhost:3333/usuarios",
});

export default function CriarUsuario() {
  const cadastroSucesso = () => {
    alert("Usuário cadastrado com sucesso!");
    document.getElementById("username").value = ""; //limpa os campos
    document.getElementById("password").value = "";
    document.getElementById("role").value = "";
    data.username = ""; //limpa as variaveis
    data.role = "";
    data.password = "";
  };

  const [data, setData] = useState({
    username: "",
    role: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    api.post("/", {
      username: data.username,
      role: data.role,
      password: data.password,
    });
    cadastroSucesso();
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);

  }

  return (
    <div className="cadastrarPacienteWrapper">
      <h1 className="cadastrarPacienteTitulo">Cadastrar paciente</h1>
      <form
        onSubmit={(e) => submit(e)}
        action=""
        className="cadastrarPacienteForm"
      >
        <div className="cadastrarPacienteItem">
          <label>Username</label>
          <input
            onChange={(e) => handle(e)}
            id="username"
            value={data.username}
            type="text"
          />
        </div>

        <div className="cadastrarPacienteItem">
          <label>Senha</label>
          <input
            onChange={(e) => handle(e)}
            id="password"
            value={data.password}
            type="password"
          />
        </div>

        <div className="cadastrarPacienteItem">
          <label>Tipo de Usuário</label>
          <select
            onChange={(e) => handle(e)}
            value={data.role}
            name="role"
            id="role"
            className="cadastrarPacienteEstado"
          >
            <option value="">Escolher</option>
            <option value="att">Atendente</option>
            <option value="mdc">Medico</option>
            <option value="fmc">Farmácia</option>
            <option value="adm">Administrador</option>
          </select>
        </div>

        <button className="cadastrarPacienteBotao">Criar</button>
      </form>
    </div>
  );
}
