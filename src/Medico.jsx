import React from "react";
import "./Medico.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilaAtendimento from "./pages/FilaAtendimento";
import InicioMedico from "./pages/InicioMedico";
import SidebarMedico from "./components/SidebarMedico";
import AtenderConsulta from "./pages/AtenderConsulta";
import EditarConsultaMedico from "./pages/EditarConsultaMedico"
import BuscarPaciente from "./pages/BuscarPaciente";
import GerarReceita from "./pages/GerarReceita";

export default function Medico() {
  return (
    <Router>
      <header>
      </header>
      <main>
        <nav>
          <SidebarMedico />
        </nav>
        <section>
          <Switch>
            <Route exact path="/inicio">
              <InicioMedico />
            </Route>
            <Route path="/consulta/atender">
              <AtenderConsulta />
            </Route>
            <Route path="/fila_atendimento">
              <FilaAtendimento />
            </Route>
            <Route path="/consulta/editar">
            <EditarConsultaMedico />
            </Route>
            <Route path="/paciente/buscar">
              <BuscarPaciente />
            </Route>
            <Route path="/gerar_receita">
              <GerarReceita />
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  );
}
