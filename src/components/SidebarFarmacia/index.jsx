import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Search, AttachMoney } from "@material-ui/icons";

export default function SidebarFarmacia() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Receitas</h3>
          {/* <ul className="sidebarList">
            <Link to={"/vendas"} style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Vendas
              </li>
            </Link>
          </ul> */}
          <ul className="sidebarList">
            <Link to={"/buscar_receita"} style={{ textDecoration: "none" }}>
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
