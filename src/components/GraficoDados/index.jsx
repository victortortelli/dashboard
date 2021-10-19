import React from "react";
import "webdatarocks/webdatarocks.css";
import * as WebDataRocksReact from "react-webdatarocks";
//import { useState, useEffect } from "react";

export default function GraficoDados() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3333/paciente")
  //     .then((resp) => resp.json())
  //     .then((resp) => setData(resp));
  // }, []);

  return (
    <div className="Grafico">
      <WebDataRocksReact.Pivot
        toolbar={true}
        componentFolder="http://localhost:3000/relatorios"
        width="90%"
        //height="10%"
        report= "http://localhost:3333/paciente"
      />
    </div>
  );
}
