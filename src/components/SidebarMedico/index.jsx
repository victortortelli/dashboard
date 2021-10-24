import React from "react";
import "./styles.css";
import {
  Dashboard,
  AirlineSeatLegroomNormal,
  LocalHospital,
  Timeline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function SidebarMedico() {
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
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Consultas</h3>
          <ul className="sidebarList">
            <Link to={"/consulta/atender"} style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <LocalHospital className="sidebarIcon" />
                Atender Consulta
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
