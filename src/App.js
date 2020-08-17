import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dots from "./components/Dots.js"
import Page from "./pages/Page.js"
import pages from "./Pages.js"

var routes = [], navList = [];
for (var i=0;i<pages.length;i++) {
  var page = pages[i];
  routes.push(
    <Route exact path={page.path} key={`route${i}`}>
      <Page slides={page.slides} />
    </Route>
  );
  navList.push(
    <li key={`navList${i}`}>
      <Link to={page.path}>{page.navLink}</Link>
    </li>
  );
}

export default function App() {
  return (
    <div className="div-app">
      <div>
        <Dots />
      </div>
      <div>
        <Router>
          <ul className="Nav-list">
            {navList}
          </ul>
          
          <hr />

          <Switch>
            {routes}
          </Switch>
        </Router>
      </div>
    </div>
  );
}