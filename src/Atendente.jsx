import Sidebar from "./components/Sidebar";
import "./Atendente.css";
import Inicio from "./pages/Inicio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BuscarPaciente from "./pages/BuscarPaciente";
import EditarPaciente from "./pages/EditarPaciente";
import CadastrarPaciente from "./pages/CadastrarPaciente";
import ListaConsulta from "./pages/ListaConsulta";
import CriarConsulta from "./pages/CriarConsulta";
import Relatorios from "./pages/Relatorios";
import FilaAtendimento from "./pages/FilaAtendimento";
import Login from "./pages/Login";

function Atendente() {
  return (
    <Router>
      <header>
        {/* ficava a topbar aqui, apaguei pq estava duplicando apos o login */}
      </header>
      <main>
        <nav>
          <Sidebar />
        </nav>
        <section>
          <Switch>
            <Route exact path="/inicio">
              <Inicio />
            </Route>
            <Route path="/paciente/buscar">
              <BuscarPaciente />
            </Route>
            <Route path="/paciente/id/">
              <EditarPaciente />
            </Route>
            <Route path="/paciente/cadastrar">
              <CadastrarPaciente />
            </Route>
            <Route path="/consulta/lista">
              <ListaConsulta />
            </Route>
            <Route path="/consulta/criar/">
              <CriarConsulta />
            </Route>
            <Route path="/relatorios">
              <Relatorios />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/fila_atendimento">
              <FilaAtendimento />
            </Route> 
          </Switch>
        </section>
      </main>
    </Router>
  );
}

export default Atendente;
