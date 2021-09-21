import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Inicio from "./pages/Inicio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BuscarPaciente from "./pages/BuscarPaciente";
import EditarPaciente from "./pages/EditarPaciente";
import CadastrarPaciente from "./pages/CadastrarPaciente";
import ListaConsulta from "./pages/ListaConsulta";
import CriarConsulta from "./pages/CriarConsulta";
import Relatorios from "./pages/Relatorios";

function App() {
  return (
    <Router>
      <header>
        <Topbar />
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
            <Route path="/paciente/id/:idPaciente">
              <EditarPaciente />
            </Route>
            <Route path="/paciente/cadastrar">
              <CadastrarPaciente />
            </Route>
            <Route path="/consulta/lista">
              <ListaConsulta />
            </Route>
            <Route path="/consulta/criar">
              <CriarConsulta />
            </Route>
            <Route path="/relatorios">
              <Relatorios />
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  );
}

export default App;
