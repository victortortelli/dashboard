import React from "react";
import "./styles.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
// Feito dessa forma para que toda vez que quisermos um ícone, basta chamar o {}.
// Do contrário ficaria com vários importações de vários ícones

export default function Topbar() {
  return (
    <div className="Topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            Info-SUS
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://i.imgur.com/ASx4YMr.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
