import React from "react";
import DownloadConsultas from "../../components/BotaoDownloadConsultas";
import DownloadPacientes from "../../components/BotaoDownloadPacientes";
import DownloadReceitas from "../../components/BotaoDownloadReceitas";
import DownloadUsuarios from "../../components/BotaoDownloadUsuarios";
import "./styles.css";

export default function ExtrairDados() {
  return (
    <div className="cadastrarPacienteWrapper">
      <h1 className="cadastrarPacienteTitulo">Selecione seu download</h1>
      <div className="botaoDownload">
        <DownloadConsultas />
      </div>
      <div className="botaoDownload">
        <DownloadPacientes />
      </div>
      <div className="botaoDownload">
        <DownloadReceitas />
      </div>
      <div className="botaoDownload">
        <DownloadUsuarios />
      </div>
    </div>
  );
}
