import React from "react";
import "./styles.css";
import CardConsulta from "../../components/CardConsulta";
import Grafico from "../../components/Grafico";
import { dadosConsulta } from "../../dadosTeste";


export default function InicioMedico() {
  return (
    <div className="inicio">
      <CardConsulta />
      <div className="inicioGraficos">
        <Grafico
          data={dadosConsulta}
          titulo="Consultas criadas nos últimos 7 dias"
          grid
          dataKey1="n_urgente"
          dataKey2="p_urgente"
          dataKey3="urgente"
          dataKey4="emergencia"
          dataKey5="dia"
        />
      </div>
      <div className="inicioWidgets">
      </div>
    </div>
  );
}
