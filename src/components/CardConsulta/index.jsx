import React from "react";
import "./styles.css";
// import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function CardConsulta() {
  return (
    <div className="cardConsulta">
      {/* <div className="tituloCardConsultaContainer">
        <span className="tituloCardConsulta">
          Consultas para serem atendidas
        </span>
      </div> */}
      <div className="urgenciaConsulta">
        <span className="tipoUrgencia">Não urgente</span>
        <div className="numeroConsultaContainer">
          <span className="numeroConsulta">16</span>
        </div>
        <span className="frequenciaConsulta">4 na fila de atendimento</span>
      </div>
      <div className="urgenciaConsulta">
        <span className="tipoUrgencia">Pouco urgente</span>
        <div className="numeroConsultaContainer">
          <span className="numeroConsulta">6</span>
        </div>
        <span className="frequenciaConsulta">1 na fila de atendimento</span>
      </div>
      <div className="urgenciaConsulta">
        <span className="tipoUrgencia">Urgência</span>
        <div className="numeroConsultaContainer">
          <span className="numeroConsulta">2</span>
        </div>
        <span className="frequenciaConsulta">4 na fila de atendimento</span>
      </div>
      <div className="urgenciaConsulta">
        <span className="tipoUrgencia">Emergência</span>
        <div className="numeroConsultaContainer">
          <span className="numeroConsulta">0</span>
        </div>
        <span className="frequenciaConsulta">2 na fila de atendimento</span>
      </div>
    </div>
  );
}
