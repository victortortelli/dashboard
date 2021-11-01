import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidebarAdmin from './components/SidebarAdmin';
import CriarUsuario from "./pages/CriarUsuario";
import BuscarUsuario from "./pages/BuscarUsuario";
import ExtrairDados from './pages/ExtrairDados';


export default function Admin() {
    return (
        <Router>
          <header>
          </header>
          <main>
            <nav>
              <SidebarAdmin />
            </nav>
            <section>
              <Switch>
                <Route exact path="/criar_usuario">
                  <CriarUsuario />
                </Route>
                <Route path="/buscar_usuario">
                  <BuscarUsuario />
                </Route>
                <Route path="/extrair_dados">
                  <ExtrairDados />
                </Route>
              </Switch>
            </section>
          </main>
        </Router>
     );
}
