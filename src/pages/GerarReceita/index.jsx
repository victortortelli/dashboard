import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { useLocation, useHistory } from "react-router-dom";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default function GerarReceita() {
  const [data, setData] = useState([]); //para mostrar os dados atuais
  const history = useHistory();
  const [dataAtt, setDataAtt] = useState({
    id: "",
    descricao: "",
    status: "",
    idConsulta: "",
    // permitir edição apenas pela tela do médico
  });

  function submit(e) {
    const r = window.confirm("Deseja gerar a receita?");
    if (r === true) {
      e.preventDefault();
      api.put(`/receita/1`, {
        descricao: dataAtt.descricao,
        status: "Emitida",
      });
      history.push({
        pathname: '/inicio',      
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
    fetch(`http://localhost:3333/receita/${params.get("id")}`)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, [location]);

  return (
    <div className="editarPacienteWrapperCM">
      <div className="containerTituloEditarPacienteCM">
        <h1>Editar Consulta</h1>
      </div>
      <div className="containerPacienteCM">
        <div className="atualizarPacienteCM">
          <form onSubmit={(e) => submit(e)} action="">
            <div>
              <span className="mostrarPacienteBottomTituloCM">
                Inserir dados da receita
              </span>
              <div className="mostrarPacienteBottomDadosCM">
                <span className="mostrarPacienteDescCM">Descrição:</span>
                <input
                  onChange={(e) => handle(e)}
                  id="descricao"
                  className="inputAtualizacaoUsuarioCM"
                  type="text"
                  defaultvalue={dataAtt.descricao}
                />
              </div>
            </div>
            <button className="atualizarPacienteButtonCM">
              Gerar Receita
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
