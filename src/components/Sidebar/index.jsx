import React from "react";
import "./styles.css";
import {
  Dashboard,
  AirlineSeatLegroomNormal,
  LocalHospital,
  FormatListBulleted,
  Search,
  PersonAdd,
  Timeline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Painel</h3>
          <ul className="sidebarList">
            <Link to={"/inicio"} style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <Dashboard className="sidebarIcon" />
                Início
              </li>
            </Link>
            <Link to={"/fila_atendimento"} style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <AirlineSeatLegroomNormal className="sidebarIcon" />
                Fila de Atendimento
              </li>
            </Link>
            <Link to={"/relatorios"} style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Relatórios
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Consultas</h3>
          <ul className="sidebarList">
            <Link to={"/consulta/criar"} style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <LocalHospital className="sidebarIcon" />
                Criar nova consulta
              </li>
            </Link>
            <Link to={"/consulta/lista"} style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <FormatListBulleted className="sidebarIcon" />
                Ver consultas
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Pacientes</h3>
          <ul className="sidebarList">
            <Link to={"/paciente/cadastrar"} style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <PersonAdd className="sidebarIcon" />
                Cadastrar
              </li>
            </Link>
            <Link to={"/paciente/buscar"} style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <Search className="sidebarIcon" />
                Buscar
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
