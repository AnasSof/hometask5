import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import PeoplePage from "./components/PeoplePage/PeoplePage";
import PlanetsPage from "./components/PlanetsPage/PlanetsPage";
import StarshipsPage from "./components/StarshipsPage/StarshipsPage";
import GeneralForm from "./components/common/GeneralForm";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            JEDI
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <Link to="/people">People</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/planets">Planets</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/starships">Starships</Link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <Switch>
        <Route path="/people">
          <PeoplePage />
        </Route>
        <Route path="/planets">
          <PlanetsPage />
        </Route>
        <Route path="/starships">
          <StarshipsPage />
        </Route>
        <Route path="/form">
          <GeneralForm />
        </Route>
        <Redirect
          to={{
            pathname: "/people",
          }}
        ></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
