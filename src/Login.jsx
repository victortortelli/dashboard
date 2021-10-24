import React from "react";
import LoginPage from "./pages/Login";
import Topbar from "./components/Topbar";
import "./Medico.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Atendente from "./Atendente";
import Medico from "./Medico";
import Farmacia from "./Farmacia";
import Admin from "./Admin";

export default function Login() {
  return (
    <Router>
      <header>
        <Topbar />
      </header>
      <main>
        <nav></nav>
        <section>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/home/att">
              <Atendente />
            </Route>
            <Route path="/home/mdc">
              <Medico />
            </Route>
            <Route path="/home/fmc">
              <Farmacia />
            </Route>
            <Route path="/home/adm">
              <Admin />
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  );
}
