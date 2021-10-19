import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { useHistory } from "react-router-dom";

export default function EditarConsultaMedico() {
  const api = axios.create({
    baseURL: "http://localhost:3333/consulta",
  });

  const [data, setData] = useState([]); //para mostrar os dados atuais

  const [dataAtt, setDataAtt] = useState({
    id: "",
    data: "",
    status: "Atendida_teste",
    urgencia: "",
    cartaoSusPaciente: "",
    sintomas: "",
    diagnostico: "",
    // permitir edição apenas pela tela do médico
  });

  function submit(e) {
    const r = window.confirm("Quer atualizar os dados?");
    if (r === true) {
      e.preventDefault();
      api.put("/", {
        status: dataAtt.status,
        sintomas: dataAtt.sintomas,
        diagnostico: dataAtt.diagnostico,
        // permitir edição apenas pela tela do médico
      });
      window.location.reload(false);
    }
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setDataAtt(newdata);
  }

  useEffect(() => {
    fetch(`http://localhost:3333/consulta/37`)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  return (
    <div className="editarPacienteWrapper">
      <div className="containerTituloEditarPaciente">
        <h1 className="tituloEditarPaciente">Editar consulta</h1>
      </div>
      <div className="containerPaciente">
        <div className="mostrarPaciente">
          <div className="mostrarPacienteBottom">
            <span className="mostrarPacienteBottomTitulo">Dados Pessoais</span>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Nome:</span>
              <span className="mostrarPacienteBottomId">{data.nome}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Data de nascimento:</span>
              <span className="mostrarPacienteBottomId">{data.dataNasc}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Gênero:</span>
              <span className="mostrarPacienteBottomId">{data.genero}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Número Cartão SUS:</span>
              <span className="mostrarPacienteBottomId">{data.cartaoSus}</span>
            </div>

            <span className="mostrarPacienteBottomTitulo">
              Dados da consulta
            </span>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">ID:</span>
              <span className="mostrarPacienteBottomId">{data.id}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Urgência:</span>
              <span className="mostrarPacienteBottomId">{data.urgencia}</span>
            </div>

            <div className="mostrarPacienteBottomDados">
              <span className="mostrarPacienteDesc">Data:</span>
              <span className="mostrarPacienteBottomId">{data.data}</span>
            </div>
          </div>
        </div>

        <div className="atualizarPaciente">
          <form onSubmit={(e) => submit(e, data.cartaoSus)} action="">
            <div className="mostrarPacienteBottom">
              <span className="mostrarPacienteBottomTitulo">
                Alterar dados da consulta
              </span>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Sintomas:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="nome"
                  className="inputAtualizacaoUsuario"
                  type="text"
                  placeholder={data.sintomas}
                  defaultValue={dataAtt.sintomas}
                />
              </div>

              <div className="mostrarPacienteBottomDados">
                <span className="mostrarPacienteDesc">Diagnóstico:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="nome"
                  className="inputAtualizacaoUsuario"
                  type="text"
                  placeholder={data.diagnostico}
                  defaultValue={dataAtt.diagnostico}
                />
              </div>
            </div>
            <button className="atualizarPacienteButton">Atualizar dados e gerar receita</button>
          </form>
        </div>
      </div>
    </div>
  );
}
