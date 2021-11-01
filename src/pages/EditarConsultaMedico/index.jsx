import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default function EditarConsultaMedico() {
  const [data, setData] = useState([]); //para mostrar os dados atuais

  const [dataAtt, setDataAtt] = useState({
    id: "",
    status: "Atendida_teste",
    sintomas: "",
    diagnostico: "",
    // permitir edição apenas pela tela do médico
  });

  const[dadosPaciente, setDadosPaciente] = useState();

  useEffect(() => {   //USAR ESSA PORRA NO RESTO DO PROGRAMA!!!!!
    api.get("/paciente/123123412341234")
    .then((response) => setDadosPaciente(response.data))
    .catch((err) =>{
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

  function submit(e) {
    const r = window.confirm("Quer atualizar os dados?");
    if (r === true) {
      //para enviar os dados atualizados ao clicar no botão
      e.preventDefault();
      api.put(`/consulta/37`, {
        status: "Atendida_teste",
        sintomas: dataAtt.sintomas,
        diagnostico: dataAtt.diagnostico,
        // permitir edição apenas pela tela do médico
      });
      //window.location.reload(false);
    }
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setDataAtt(newdata);
    console.log(newdata);
  }

  useEffect(() => {
    fetch(`http://localhost:3333/consulta/37`)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  return (
    <div className="editarPacienteWrapperCM">
      <div className="containerTituloEditarPacienteCM">
        <h1>Editar consulta</h1>
      </div>
      <div className="containerPacienteCM">
        <div className="mostrarPacienteCM">
          <div className="mostrarPacienteBottomCM">
            <span className="mostrarPacienteBottomTituloCM">Dados Pessoais</span>

            <div className="mostrarPacienteBottomDadosCM">
              <span className="mostrarPacienteDescCM">Nome:</span>
              <span className="mostrarPacienteBottomIdCM">{dadosPaciente?.nome}</span>
            </div>

            <div className="mostrarPacienteBottomDadosCM">
              <span className="mostrarPacienteDescCM">Data de nascimento:</span>
              <span className="mostrarPacienteBottomIdCM">{dadosPaciente?.dataNasc}</span>
            </div>

            <div className="mostrarPacienteBottomDadosCM">
              <span className="mostrarPacienteDescCM">Gênero:</span>
              <span className="mostrarPacienteBottomIdCM">{dadosPaciente?.genero}</span>
            </div>

            <div className="mostrarPacienteBottomDadosCM">
              <span className="mostrarPacienteDescCM">Número Cartão SUS:</span>
              <span className="mostrarPacienteBottomIdCM">{dadosPaciente?.cartaoSus}</span>
            </div>

            <span className="mostrarPacienteBottomTituloCM">
              Dados da consulta
            </span>

            <div className="mostrarPacienteBottomDadosCM">
              <span className="mostrarPacienteDescCM">ID:</span>
              <span className="mostrarPacienteBottomIdCM">{data.id}</span>
            </div>

            <div className="mostrarPacienteBottomDadosCM">
              <span className="mostrarPacienteDescCM">Urgência:</span>
              <span className="mostrarPacienteBottomIdCM">{data.urgencia}</span>
            </div>

            <div className="mostrarPacienteBottomDadosCM">
              <span className="mostrarPacienteDescCM">Data:</span>
              <span className="mostrarPacienteBottomIdCM">{data.data}</span>
            </div>
          </div>
        </div>

        <div className="atualizarPacienteCM">
          <form onSubmit={(e) => submit(e)} action="">
            <div>
              <span className="mostrarPacienteBottomTituloCM">
                Completar dados da consulta
              </span>

              <div className="mostrarPacienteBottomDadosCM">
                <span className="mostrarPacienteDescCM">Sintomas:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="sintomas"
                  className="inputAtualizacaoUsuarioCM"
                  type="text"
                  defaultvalue={dataAtt.sintomas}
                  placeholder={data.sintomas}
                />
              </div>

              <div className="mostrarPacienteBottomDadosCM">
                <span className="mostrarPacienteDescCM">Diagnóstico:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="diagnostico"
                  className="inputAtualizacaoUsuarioCM"
                  type="text"
                  defaultvalue={dataAtt.diagnostico}
                  placeholder={data.diagnostico}
                />
              </div>
            </div>
            <button className="atualizarPacienteButtonCM">
              Atualizar dados e gerar receita
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
