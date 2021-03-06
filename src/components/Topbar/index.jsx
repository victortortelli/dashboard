import React from "react";
import "./styles.css";
// Feito dessa forma para que toda vez que quisermos um ícone, basta chamar o {}.
// Do contrário ficaria com vários importações de vários ícones
import { useHistory } from "react-router";

export default function Topbar() {
  const history = useHistory();

  function redirectLogin (){
    history.push(`/`);
  };

  return (
    <div className="Topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Info-SUS</span>
        </div>
        <div className="topRight">
          <button type="submit" className="logoffButton" onClick={() => {redirectLogin()}}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
