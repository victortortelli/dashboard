import React from "react";
import "./styles.css";
import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Route } from "react-router-dom";

export default function CardConsulta() {
  const [data, setData] = useState([]);

  const columns = [
    { title: "Cartão SUS", field: "cartaoSusPaciente" },
    { title: "Data", field: "data" },
    { title: "Urgência", field: "urgencia" },
    { title: "Status", field: "status" },
  ];

  useEffect(() => {
    fetch("http://localhost:3333/consulta_card")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  var nu=0 , pu=0 , ur=0 , mu=0 , em=0;

  function contaConsulta() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].urgencia === 'nu') {
        nu++;
      }
      else if (data[i].urgencia === 'pu'){
        pu++;
      }
      else if (data[i].urgencia === 'ur'){
        ur++;
      }
      else if (data[i].urgencia === 'mu'){
        mu++;
      }
      else if (data[i].urgencia === 'em'){
        em++;
      }
    }
  }

  contaConsulta();

  return (
    <div className="cardConsulta">
      <div className="urgenciaConsulta">
        <div className="urgenciaConsultaCorNu">
          <span className="tipoUrgencia">Não urgente</span>
          <div className="numeroConsultaContainer">
            <span className="numeroConsulta">{nu}</span>
          </div>
        </div>
      </div>
      <div className="urgenciaConsulta">
        <div className="urgenciaConsultaCorPu">
          <span className="tipoUrgencia">Pouco urgente</span>
          <div className="numeroConsultaContainer">
            <span className="numeroConsulta">{pu}</span>
          </div>
        </div>
      </div>
      <div className="urgenciaConsulta">
        <div className="urgenciaConsultaCorUr">
          <span className="tipoUrgencia">Urgente</span>
          <div className="numeroConsultaContainer">
            <span className="numeroConsulta">{ur}</span>
          </div>
        </div>
      </div>
      <div className="urgenciaConsulta">
        <div className="urgenciaConsultaCorMu">
          <span className="tipoUrgencia">Muito Urgente</span>
          <div className="numeroConsultaContainer">
            <span className="numeroConsulta">{mu}</span>
          </div>
        </div>
      </div>
      <div className="urgenciaConsulta">
        <div className="urgenciaConsultaCorEm">
          <span className="tipoUrgencia">Emergência</span>
          <div className="numeroConsultaContainer">
            <span className="numeroConsulta">{em}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
