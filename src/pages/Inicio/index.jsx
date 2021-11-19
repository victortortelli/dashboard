import React from "react";
import "./styles.css";
import CardConsulta from "../../components/CardConsulta";
import Grafico from "../../components/Grafico";
import { dadosConsulta } from "../../dadosTeste";

export default function Inicio() {



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
          dataKey4="m_urgente"
          dataKey5="emergencia"
          dataKey6="dia"
        />
      </div>
      <div className="inicioWidgets">
        {/* <SmallWidget /> */}
        {/* <LargeWidget /> */}
      </div>
    </div>
  );
}
