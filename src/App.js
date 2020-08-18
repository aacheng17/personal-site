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

var navList = [];
for (var i=0;i<pages.length;i++) {
  var page = pages[i];
  navList.push(
    <li key={`navList${i}`}>
      <Link to={page.path} style={{}}>{page.navLink}</Link>
    </li>
  );
}

var routes = [];
for (var i=0;i<pages.length;i++) {
  var page = pages[i];
  routes.push(
    <Route exact path={page.path} key={`route${i}`}>
      <ul className="Nav-list">
        {navList}
      </ul>
      <hr />
      <Page slides={page.slides} />
    </Route>
  );
}

export default function App() {
  return (
    <div className="div-app">
      <Dots />
      <Router>
        <Switch>
          {routes}
        </Switch>
      </Router>
    </div>
  );
}