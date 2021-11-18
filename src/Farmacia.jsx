import React from 'react'
import VendasFarmacia from './pages/VendasFarmacia';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SidebarFarmacia from './components/SidebarFarmacia';
import BuscarReceita from './pages/BuscarReceita';

export default function Farmacia() {return (
    <Router>
      <header>
      </header>
      <main>
        <nav>
          <SidebarFarmacia />
        </nav>
        <section>
          <Switch>
            <Route exact path="/vendas">
              <VendasFarmacia />
            </Route>
            <Route exact path="/buscar_receita">
              <BuscarReceita />
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  );
}
