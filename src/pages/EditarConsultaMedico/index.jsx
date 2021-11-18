import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { useLocation, useHistory } from "react-router-dom";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default function EditarConsultaMedico() {
  const [data, setData] = useState([]); //para mostrar os dados atuais
  const history = useHistory();
  const [dataAtt, setDataAtt] = useState({
    id: "",
    status: "",
    sintomas: "",
    diagnostico: "",
    // permitir edição apenas pela tela do médico
  });

  function submit(e) {
    const r = window.confirm("Quer atualizar os dados e gerar a receita?");
    if (r === true) {
      e.preventDefault();
      api.put(`/consulta/${data.id}`, {
        status: "Atendida",
        sintomas: dataAtt.sintomas,
        diagnostico: dataAtt.diagnostico,
      });
      api.post(`/receita`, {
        idConsulta: `${data.id}`,
      });
      history.push({
        pathname: '/gerar_receita',
        search: `?id=${data.id}`    
      });
    }
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setDataAtt(newdata);
  }
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);    
    fetch(`http://localhost:3333/consulta/${params.get("id")}`)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, [location]);

  return (
    <div className="editarPacienteWrapperCM">
      <div className="containerTituloEditarPacienteCM">
        <h1>Editar consulta</h1>
      </div>
      <div className="containerPacienteCM">
        <div className="mostrarPacienteCM">
          <div className="mostrarPacienteBottomCM">

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
