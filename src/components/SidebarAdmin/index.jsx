import React from 'react'
import { Link } from "react-router-dom";
import "./styles.css";
import {
    Search,
    PersonAdd,
    Equalizer
  } from "@material-ui/icons";

export default function SidebarAdmin() {
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Usuários</h3>
              <ul className="sidebarList">
                <Link to={"/criar_usuario"} style={{ textDecoration: "none" }}>
                  <li className="sidebarListItem">
                    <PersonAdd className="sidebarIcon" />
                    Criar
                  </li>
                </Link>
              </ul>
              <ul className="sidebarList">
                <Link to={"/buscar_usuario"} style={{ textDecoration: "none" }}>
                  <li className="sidebarListItem">
                    <Search className="sidebarIcon" />
                    Buscar
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Relatórios</h3>
              <ul className="sidebarList">
                <Link to={"/extrair_dados"} style={{ textDecoration: "none" }}>
                  <li className="sidebarListItem">
                    <Equalizer className="sidebarIcon" />
                    Extrair dados
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      );
}
